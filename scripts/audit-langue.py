# Repère les blocs de texte restés en français dans une version linguistique du site construit.
import sys, re, pathlib, html, collections
lang = sys.argv[1]; root = pathlib.Path('dist') / lang
FR = set('le la les des du et est vous avec pour sur une dans au aux qui pas je nous votre vos ce cette mais où être sont été très'.split())
OT = {'it': set('il gli della delle che per con non sono è una nel nella alla di lo dei degli vostro vostra anche più'.split()),
      'en': set('the and is you with for on a in of to are your this that be from'.split()),
      'es': set('el los las del que por con no son es una en su sus muy para usted'.split())}[lang]
found = collections.defaultdict(set)
for f in sorted(root.rglob('*.html')):
    t = f.read_text()
    t = re.sub(r'(?s)<(script|style)[^>]*>.*?</\1>', ' ', t)
    for m in re.finditer(r'(?s)>([^<>]{25,})<', t):
        txt = html.unescape(' '.join(m.group(1).split()))
        w = re.findall(r"[a-zàâçéèêëîïôûùüÿœ]+", txt.lower())
        fr = sum(x in FR for x in w); ot = sum(x in OT for x in w)
        if fr >= 3 and fr > 2 * ot:
            found[txt[:160]].add(str(f.relative_to(root)))
    for a in re.findall(r'(?:alt|title|content)="([^"]{25,})"', t):
        txt = html.unescape(a); w = re.findall(r"[a-zàâçéèêëîïôûùüÿœ]+", txt.lower())
        fr = sum(x in FR for x in w); ot = sum(x in OT for x in w)
        if fr >= 2 and fr > 2 * ot:
            found['[attr] ' + txt[:160]].add(str(f.relative_to(root)))
print(f'== {lang} : {len(found)} blocs suspects')
for k, v in sorted(found.items(), key=lambda x: -len(x[1])):
    print(f'{len(v):3d} pages | {k} | ex: {sorted(v)[0]}')
