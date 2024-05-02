document.addEventListener('DOMContentLoaded', function () {
    fetch('reviews.json')
        .then(response => response.json())
        .then(data => {
            const contentContainer = document.getElementById('content');
            const animations = ['slide-in-blurred-tl', 'slide-in-blurred-top', 'slide-in-blurred-right', 'slide-in-blurred-left', 'slide-in-blurred-bottom'];
            data.company.forEach((company, index) => {
                const animationClass = animations[index % animations.length];  
                contentContainer.appendChild(createCompanyDiv(company, index, animationClass));
            });
        })
        .catch(error => console.error('Error loading the JSON data:', error));

    function createCompanyDiv(company, index, animationClass) {
        const div = document.createElement('div');
        div.className = `eachdiv ${animationClass} div${index + 1}`;

        const userDetails = document.createElement('div');
        userDetails.className = 'userdetails';
        div.appendChild(userDetails);

        const imgBox = document.createElement('div');
        imgBox.className = 'imgbox';
        const img = document.createElement('img');
        img.src = company.imgUrl;
        img.alt = company.name;
        imgBox.appendChild(img);
        userDetails.appendChild(imgBox);

        const detBox = document.createElement('div');
        detBox.className = 'detbox';
        const nameP = document.createElement('p');
        nameP.className = 'name'+ (company.theme === 'dark' ? ' dark' : '');
        nameP.textContent = company.name;
        const designationP = document.createElement('p');
        designationP.className = 'designation'+ (company.theme === 'dark' ? ' dark' : '');
        designationP.textContent = company.designation;
        detBox.appendChild(nameP);
        detBox.appendChild(designationP);
        userDetails.appendChild(detBox);

        const review = document.createElement('div');
        review.className = 'review' + (company.theme === 'dark' ? ' dark' : '');
        const h4 = document.createElement('h4');
        h4.textContent = company.review.h4;
        const p = document.createElement('p');
        p.textContent = company.review.p;
        review.appendChild(h4);
        review.appendChild(p);
        div.appendChild(review);

        return div;
    }
});
