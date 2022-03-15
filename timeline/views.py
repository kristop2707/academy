from django.shortcuts import render
from django.http import HttpResponse

from timeline.models import Title, Text

# получение данных из бд
def index(request):
    a = Title.objects.filter(id='1')
    b = Title.objects.filter(id='2')
    c = Title.objects.filter(id='4')
    d = Title.objects.filter(id='5')
    e = Title.objects.filter(id='6')
    f = Title.objects.filter(id='7')
    g = Title.objects.filter(id='8')
    h = Title.objects.filter(id='9')
    i = Title.objects.filter(id='10')
    j = Title.objects.filter(id='11')
    k = Title.objects.filter(id='12')
    l = Title.objects.filter(id='13')
    m = Title.objects.filter(id='14')
    n = Title.objects.filter(id='15')
    o = Title.objects.filter(id='16')
    p = Title.objects.filter(id='17')
    q = Title.objects.filter(id='18')
    r = Title.objects.filter(id='19')
    s = Title.objects.filter(id='20')
    t = Title.objects.filter(id='21')
    u = Title.objects.filter(id='22')
    v = Title.objects.filter(id='23')
    w = Title.objects.filter(id='24')
    x = Title.objects.filter(id='25')
    z = Title.objects.filter(id='26')
    y = Title.objects.filter(id='27')
    ab = Title.objects.filter(id='28')
    cd = Title.objects.filter(id='29')
    ef = Title.objects.filter(id='30')
    gh = Title.objects.filter(id='31')
    lm = Title.objects.filter(id='32')
    cn = Title.objects.filter(id='33')
    cp = Title.objects.filter(id='34')

    yy = Text.objects.filter(id='1')
    return render(request, "timeline/index.html", {"a": a, "b": b, "c": c, "d": d, "e": e, "f": f, "g": g,
                                                   "h": h, "i": i, "j": j, "k": k, "l": l, "m": m, "n": n,
                                                   "o": o, "p": p, "q": q, "r": r, "s": s, "t": t, "u": u,
                                                   "v": v, "w": w, "x": x, "z": z, "y": y, "ab": ab,
                                                   "cd": cd, "ef": ef, "gh": gh, "lm": lm, "cn": cn, "cp": cp, "yy": yy})


