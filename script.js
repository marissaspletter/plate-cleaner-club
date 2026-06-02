const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}

const locationData = {
  hoboken: {
    title: 'Hoboken',
    copy: 'A core market for Plate Cleaner Club, featuring local restaurants, cafés, dessert shops, brunch spots, and neighborhood favorites.',
    tags: ['Local restaurants', 'Cafés', 'Dessert spots']
  },
  manhattan: {
    title: 'Manhattan',
    copy: 'NYC restaurant coverage across brunch, dinner, cafés, bakeries, dessert shops, and trending food experiences.',
    tags: ['NYC dining', 'Brunch', 'Dessert', 'Date night']
  },
  brazil: {
    title: 'Brazil',
    copy: 'Travel food reviews highlighting cafés, casual eats, desserts, markets, and memorable dining experiences abroad.',
    tags: ['Travel food', 'Cafés', 'Local eats']
  },
  croatia: {
    title: 'Croatia',
    copy: 'International restaurant and food experience coverage, including seaside dining, hidden gems, and local favorites.',
    tags: ['Hidden gems', 'Coastal dining', 'Travel reviews']
  },
  panama: {
    title: 'Panama',
    copy: 'Travel-focused food content showcasing restaurants, cafés, hostels, and dining experiences across popular destinations.',
    tags: ['Travel eats', 'Cafés', 'Restaurants']
  },
  colombia: {
    title: 'Colombia',
    copy: 'Food and café reviews designed to help travelers and locals find memorable places to eat.',
    tags: ['Coffee shops', 'Airport eats', 'Travel food']
  }
};

const pins = document.querySelectorAll('.pin');
const title = document.getElementById('map-title');
const copy = document.getElementById('map-copy');
const tags = document.getElementById('map-tags');

pins.forEach((pin) => {
  pin.addEventListener('click', () => {
    pins.forEach((item) => item.classList.remove('active'));
    pin.classList.add('active');

    const data = locationData[pin.dataset.city];
    if (!data) return;

    title.textContent = data.title;
    copy.textContent = data.copy;
    tags.innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join('');
  });
});
