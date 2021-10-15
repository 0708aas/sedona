var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [0, 3000],
    connect: true,
    range: {
        'min': 0,
        'max': 4000,
    }
});
