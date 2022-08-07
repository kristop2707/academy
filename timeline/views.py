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
    qa = Text.objects.filter(id='2')
    qw = Text.objects.filter(id='3')
    qe = Text.objects.filter(id='4')
    qr = Text.objects.filter(id='5')
    qt = Text.objects.filter(id='6')
    qy = Text.objects.filter(id='7')
    qu = Text.objects.filter(id='8')
    qi = Text.objects.filter(id='9')
    qo = Text.objects.filter(id='10')
    qp = Text.objects.filter(id='11')
    qs = Text.objects.filter(id='12')
    qd = Text.objects.filter(id='13')
    qf = Text.objects.filter(id='14')
    qg = Text.objects.filter(id='15')
    qh = Text.objects.filter(id='16')
    qj = Text.objects.filter(id='17')
    qk = Text.objects.filter(id='18')
    ql = Text.objects.filter(id='19')
    qz = Text.objects.filter(id='20')
    qx = Text.objects.filter(id='21')
    qc = Text.objects.filter(id='22')
    qv = Text.objects.filter(id='23')
    qb = Text.objects.filter(id='24')
    qn = Text.objects.filter(id='25')
    qm = Text.objects.filter(id='26')
    wq = Text.objects.filter(id='27')
    ww = Text.objects.filter(id='28')
    we = Text.objects.filter(id='29')
    wr = Text.objects.filter(id='30')
    wt = Text.objects.filter(id='31')
    wy = Text.objects.filter(id='63')
    wu = Text.objects.filter(id='64')
    return render(request, "timeline/index.html", {"a": a, "b": b, "c": c, "d": d, "e": e, "f": f, "g": g,
                                                   "h": h, "i": i, "j": j, "k": k, "l": l, "m": m, "n": n,
                                                   "o": o, "p": p, "q": q, "r": r, "s": s, "t": t, "u": u,
                                                   "v": v, "w": w, "x": x, "z": z, "y": y, "ab": ab,
                                                   "cd": cd, "ef": ef, "gh": gh, "lm": lm, "cn": cn, "cp": cp, "yy": yy,
                                                   "qa": qa, "qw": qw, "qe": qe, "qr": qr, "qt": qt, "qy": qy, "qu": qu,
                                                   "qi": qi, "qo": qo, "qp": qp, "qs": qs, "qd": qd, "qf": qf, "qg": qg,
                                                   "qh": qh, "qj": qj, "qk": qk, "ql": ql, "qz": qz, "qx": qx, "qc": qc,
                                                   "qv": qv, "qb": qb, "qn": qn, "qm": qm, "wq": wq, "ww": ww, "we": we,
                                                   "wr": wr, "wt": wt, "wy": wy, "wu": wu})


def en(request):
    a = Title.objects.filter(id='35')
    b = Title.objects.filter(id='36')
    c = Title.objects.filter(id='37')
    d = Title.objects.filter(id='38')
    e = Title.objects.filter(id='39')
    f = Title.objects.filter(id='43')
    g = Title.objects.filter(id='42')
    h = Title.objects.filter(id='41')
    i = Title.objects.filter(id='40')
    j = Title.objects.filter(id='46')
    k = Title.objects.filter(id='45')
    l = Title.objects.filter(id='44')
    m = Title.objects.filter(id='47')
    n = Title.objects.filter(id='48')
    o = Title.objects.filter(id='49')
    p = Title.objects.filter(id='50')
    q = Title.objects.filter(id='51')
    r = Title.objects.filter(id='52')
    s = Title.objects.filter(id='53')
    t = Title.objects.filter(id='58')
    u = Title.objects.filter(id='54')
    v = Title.objects.filter(id='55')
    w = Title.objects.filter(id='56')
    x = Title.objects.filter(id='57')
    z = Title.objects.filter(id='59')
    y = Title.objects.filter(id='66')
    ab = Title.objects.filter(id='60')
    cd = Title.objects.filter(id='65')
    ef = Title.objects.filter(id='64')
    gh = Title.objects.filter(id='63')
    lm = Title.objects.filter(id='62')
    cn = Title.objects.filter(id='33')
    cp = Title.objects.filter(id='61')

    yy = Text.objects.filter(id='32')
    qa = Text.objects.filter(id='33')
    qw = Text.objects.filter(id='34')
    qe = Text.objects.filter(id='35')
    qr = Text.objects.filter(id='40')
    qt = Text.objects.filter(id='39')
    qy = Text.objects.filter(id='38')
    qu = Text.objects.filter(id='37')
    qi = Text.objects.filter(id='42')
    qo = Text.objects.filter(id='41')
    qp = Text.objects.filter(id='44')
    qs = Text.objects.filter(id='45')
    qd = Text.objects.filter(id='46')
    qf = Text.objects.filter(id='47')
    qg = Text.objects.filter(id='48')
    qh = Text.objects.filter(id='55')
    qj = Text.objects.filter(id='51')
    qk = Text.objects.filter(id='52')
    ql = Text.objects.filter(id='53')
    qz = Text.objects.filter(id='54')
    qx = Text.objects.filter(id='56')
    qc = Text.objects.filter(id='57')
    qv = Text.objects.filter(id='60')
    qb = Text.objects.filter(id='59')
    qn = Text.objects.filter(id='36')
    qm = Text.objects.filter(id='49')
    wq = Text.objects.filter(id='58')
    ww = Text.objects.filter(id='43')
    we = Text.objects.filter(id='61')
    wr = Text.objects.filter(id='30')
    wt = Text.objects.filter(id='50')
    wy = Text.objects.filter(id='62')
    wu = Text.objects.filter(id='65')
    return render(request, "timeline/en.html", {"a": a, "b": b, "c": c, "d": d, "e": e, "f": f, "g": g,
                                                   "h": h, "i": i, "j": j, "k": k, "l": l, "m": m, "n": n,
                                                   "o": o, "p": p, "q": q, "r": r, "s": s, "t": t, "u": u,
                                                   "v": v, "w": w, "x": x, "z": z, "y": y, "ab": ab,
                                                   "cd": cd, "ef": ef, "gh": gh, "lm": lm, "cn": cn, "cp": cp, "yy": yy,
                                                   "qa": qa, "qw": qw, "qe": qe, "qr": qr, "qt": qt, "qy": qy, "qu": qu,
                                                   "qi": qi, "qo": qo, "qp": qp, "qs": qs, "qd": qd, "qf": qf, "qg": qg,
                                                   "qh": qh, "qj": qj, "qk": qk, "ql": ql, "qz": qz, "qx": qx, "qc": qc,
                                                   "qv": qv, "qb": qb, "qn": qn, "qm": qm, "wq": wq, "ww": ww, "we": we,
                                                   "wr": wr, "wt": wt, "wy": wy, "wu": wu})
