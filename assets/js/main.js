/* MY R.O.N. beauty studio — interface behaviour
   Czech is in the markup; Ukrainian is applied over it. */

(function () {
  'use strict';

  /* ── language ─────────────────────────────────────────── */

  var uk = {
    'skip': 'Перейти до вмісту',

    'nav.services': 'Послуги',
    'nav.prices': 'Ціни',
    'nav.gallery': 'Галерея',
    'nav.team': 'Команда',
    'nav.contact': 'Контакти',

    'cta.book': 'Записатись',
    'cta.bookTime': 'Записатись онлайн',
    'cta.seeWork': 'Подивитись роботи',

    'hero.where': 'Skvrňanská 18 · Пльзень',
    'hero.kind': 'beauty studio',
    'hero.lede': 'Нігті, волосся, вії, брови та макіяж — п’ять напрямів, один салон.<br>Відчинено щодня з 8:00 до 20:00.',
    'ticker': 'манікюр · педикюр · нарощування нігтів · гель-лак · стрижка · фарбування · нарощування волосся · нарощування вій · ламінування вій · ламінування брів · фарбування брів · макіяж · зачіски ·&nbsp;',

    'svc.eyebrow': 'Що ми робимо',
    'svc.title': 'П’ять напрямів під одним дахом',
    'svc.nails.name': 'Нігті',
    'svc.nails.note': 'Апаратний манікюр і педикюр, гель-лак, укріплення гелем і нарощування довжини S, M та L.',
    'svc.nails.t1': 'Апаратний манікюр',
    'svc.nails.t2': 'Педикюр',
    'svc.nails.t3': 'Гель-лак',
    'svc.nails.t4': 'Укріплення гелем',
    'svc.nails.t5': 'Нарощування S · M · L',
    'svc.nails.t6': 'Nail art',
    'svc.hair.name': 'Волосся',
    'svc.hair.note': 'Стрижка, фарбування, укладка й нарощування волосся у майстрів категорії Top mistr.',
    'svc.hair.t1': 'Стрижка',
    'svc.hair.t2': 'Фарбування',
    'svc.hair.t3': 'Укладка',
    'svc.hair.t4': 'Нарощування волосся',
    'svc.lash.name': 'Вії',
    'svc.lash.note': 'Нарощування та ламінування у лешмейкерок з оцінкою 5,0 у системі записів.',
    'svc.lash.t1': 'Нарощування вій',
    'svc.lash.t2': 'Ламінування вій',
    'svc.brow.name': 'Брови',
    'svc.brow.note': 'Ламінування, фарбування та корекція форми — brows bar веде косметолог Юлія.',
    'svc.brow.t1': 'Ламінування брів',
    'svc.brow.t2': 'Фарбування брів',
    'svc.brow.t3': 'Корекція форми',
    'svc.mua.name': 'Макіяж і зачіски',
    'svc.mua.note': 'Денний і вечірній макіяж та святкові зачіски — на зйомку, весілля чи вечір, коли хочеться бути помітною.',
    'svc.mua.t1': 'Денний макіяж',
    'svc.mua.t2': 'Вечірній макіяж',
    'svc.mua.t3': 'Святкова зачіска',

    'price.eyebrow': 'Ціни',
    'price.title': 'Ціна залежить від майстра',
    'price.lede': 'Кожен напрям ведуть майстри двох рівнів. Ви обираєте рівень — працюємо однаково ретельно на обох.',
    'price.tier1': 'Майстер',
    'price.tier2': 'Топ-майстер',
    'price.ask': 'залежить від довжини та майстра',
    'price.footNails': 'Педикюр і nail art рахуємо за обсягом — точну ціну побачите під час вибору часу.',
    'price.footOther': 'Ціну за конкретну послугу й майстра видно одразу під час вибору часу.',
    'price.open': 'Відкрити запис',

    'tab.nails': 'Нігті',
    'tab.hair': 'Волосся',
    'tab.lash': 'Вії',
    'tab.brow': 'Брови',
    'tab.mua': 'Макіяж',

    'gal.eyebrow': 'Instagram',
    'gal.title': 'Наші роботи',
    'gal.all': 'Усе',
    'gal.followers': ' — 7 600+ підписників в Instagram',

    'team.eyebrow': 'Команда',
    'team.title': 'Майстри та топ-майстри',
    'team.lede': 'Дванадцять майстрів у чотирьох напрямах. Оцінки та кількість відгуків — із нашої системи записів.',
    'team.reviews': 'відгуків',
    'team.noReviews': 'поки без відгуків',
    'rank.top': 'Топ-майстер',
    'rank.mistr': 'Майстер',
    'job.hair': 'Перукарка',
    'job.brow': 'Косметолог · брови та макіяж',
    'job.lash': 'Лешмейкер',
    'job.nail': 'Манікюр і педикюр',
    'job.nailOnly': 'Манікюр',

    'con.eyebrow': 'Контакти',
    'con.title': 'Завітайте до нас',
    'con.lede': 'Запис працює онлайн цілодобово. Обираєте напрям, майстра й час — підтвердження приходить одразу.',
    'con.addr': 'Адреса',
    'con.hours': 'Графік',
    'con.hoursVal': 'Понеділок – неділя, 8:00 – 20:00',
    'con.hoursShort': 'Пн–Нд 8:00–20:00',
    'con.lang': 'Спілкуємось',
    'con.langVal': 'Українською · Česky',
    'con.booking': 'Онлайн-запис',
    'con.shop': 'Магазин'
  };

  var nodes = document.querySelectorAll('[data-i18n]');
  var cs = {};
  nodes.forEach(function (el, i) { cs[i] = el.innerHTML; });

  function setLang(lang) {
    nodes.forEach(function (el, i) {
      var key = el.getAttribute('data-i18n');
      el.innerHTML = (lang === 'uk' && uk[key]) ? uk[key] : cs[i];
    });
    document.documentElement.lang = (lang === 'uk') ? 'uk' : 'cs';
    document.querySelectorAll('.lang__btn').forEach(function (b) {
      var on = b.dataset.lang === lang;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', String(on));
    });
    try { localStorage.setItem('myron-lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang__btn').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  var saved;
  try { saved = localStorage.getItem('myron-lang'); } catch (e) {}
  if (!saved && /^uk/i.test(navigator.language || '')) saved = 'uk';
  if (saved === 'uk') setLang('uk');

  /* ── header state ─────────────────────────────────────── */

  var head = document.getElementById('masthead');
  var onScroll = function () {
    head.classList.toggle('is-stuck', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── mobile drawer ────────────────────────────────────── */

  var burger = document.querySelector('.burger');
  var drawer = document.getElementById('drawer');

  function closeDrawer() {
    drawer.hidden = true;
    burger.setAttribute('aria-expanded', 'false');
  }

  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') === 'true';
    if (open) { closeDrawer(); return; }
    drawer.hidden = false;
    burger.setAttribute('aria-expanded', 'true');
  });

  drawer.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeDrawer();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !drawer.hidden) { closeDrawer(); burger.focus(); }
  });

  /* ── price tabs ───────────────────────────────────────── */

  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs__btn'));

  function showTab(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.classList.toggle('is-on', on);
      t.setAttribute('aria-selected', String(on));
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { showTab(tab); });
    tab.addEventListener('keydown', function (e) {
      var step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!step) return;
      e.preventDefault();
      var next = tabs[(i + step + tabs.length) % tabs.length];
      showTab(next);
      next.focus();
    });
  });

  /* ── gallery filter ───────────────────────────────────── */

  var chips = document.querySelectorAll('.chips__btn');
  var cells = document.querySelectorAll('.grid__cell');

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var want = chip.dataset.filter;
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle('is-on', on);
        c.setAttribute('aria-pressed', String(on));
      });
      cells.forEach(function (cell) {
        cell.classList.toggle('is-out', want !== 'all' && cell.dataset.cat !== want);
      });
    });
  });

  /* ── scroll reveal ────────────────────────────────────── */

  var quiet = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!quiet && 'IntersectionObserver' in window) {
    /* .menu is left out on purpose — a hidden tab panel never intersects,
       so revealing it would lag every tab switch by the fade duration */
    var risers = document.querySelectorAll(
      '.band__head, .disc__row, .tabs, .chips, .visit__side, .facts'
    );
    /* these already carry a transform of their own — fade only */
    var faders = document.querySelectorAll('.grid__cell, .crew__card');

    risers.forEach(function (el) { el.classList.add('rise'); });
    faders.forEach(function (el) { el.classList.add('fade'); });

    var targets = [].concat(
      Array.prototype.slice.call(risers),
      Array.prototype.slice.call(faders)
    );

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: .08 });

    targets.forEach(function (el) { io.observe(el); });
  }
})();
