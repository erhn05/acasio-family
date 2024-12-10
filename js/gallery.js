// JSON variable with multiple image entries
const imageData = [
    {
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95b8f84e-ebfd-4424-a670-aab05fbb6b5f/d9p4rf1-3491eed8-084a-4826-85e4-8c8a64c13678.png/v1/fill/w_894,h_894,q_70,strp/vanellope_by_erhn_d9p4rf1-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzk1YjhmODRlLWViZmQtNDQyNC1hNjcwLWFhYjA1ZmJiNmI1ZlwvZDlwNHJmMS0zNDkxZWVkOC0wODRhLTQ4MjYtODVlNC04YzhhNjRjMTM2NzgucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ih-1DlXp7HF3BYdhjJZy4PWcTkGeFO6_qZ-EtPllFfs",
        "title": "Vanellope"
    },
    {
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95b8f84e-ebfd-4424-a670-aab05fbb6b5f/d9sf1zy-7843fdd0-d928-45da-bbbd-3366e7e06810.png/v1/fill/w_894,h_894,q_70,strp/dead_master_by_erhn_d9sf1zy-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzk1YjhmODRlLWViZmQtNDQyNC1hNjcwLWFhYjA1ZmJiNmI1ZlwvZDlzZjF6eS03ODQzZmRkMC1kOTI4LTQ1ZGEtYmJiZC0zMzY2ZTdlMDY4MTAucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1hq4SjXs4undg54GwjevL_gLtOe7rUDshjQcA9GdphM",
        "title": "Dead Master"
    },
    {
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95b8f84e-ebfd-4424-a670-aab05fbb6b5f/da05pod-b7715755-3c13-4f7f-80e0-c93e7832bc72.png/v1/fill/w_894,h_894,q_70,strp/velma_by_erhn_da05pod-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzk1YjhmODRlLWViZmQtNDQyNC1hNjcwLWFhYjA1ZmJiNmI1ZlwvZGEwNXBvZC1iNzcxNTc1NS0zYzEzLTRmN2YtODBlMC1jOTNlNzgzMmJjNzIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YvSZCne0EK4yOOqIOibqqgV8ZyTcl6DHOJKQZNOIQsw",
        "title": "Velma"
    },
    {
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95b8f84e-ebfd-4424-a670-aab05fbb6b5f/dawb24a-1c20016b-c7fc-4042-a6e3-4826592d6913.png/v1/fill/w_894,h_894,q_70,strp/hana_by_erhn_dawb24a-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzk1YjhmODRlLWViZmQtNDQyNC1hNjcwLWFhYjA1ZmJiNmI1ZlwvZGF3YjI0YS0xYzIwMDE2Yi1jN2ZjLTQwNDItYTZlMy00ODI2NTkyZDY5MTMucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kSmYVnNh4h02VqO-5Fs3uO9Mm3TIS7MfG4rhuXrTUF8",
        "title": "Hana"
    },
    {
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95b8f84e-ebfd-4424-a670-aab05fbb6b5f/dawdchh-ee97c44c-545f-441b-9c1f-03ef2a8be33d.png/v1/fill/w_894,h_894,q_70,strp/lena_by_erhn_dawdchh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzk1YjhmODRlLWViZmQtNDQyNC1hNjcwLWFhYjA1ZmJiNmI1ZlwvZGF3ZGNoaC1lZTk3YzQ0Yy01NDVmLTQ0MWItOWMxZi0wM2VmMmE4YmUzM2QucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Dl0xHHOSu2MJc6isxw7-06gxGrFHVg3aqP4gYhYBSqo",
        "title": "Lena"
    },
    {
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95b8f84e-ebfd-4424-a670-aab05fbb6b5f/dawp5ir-f12ca084-418f-4d6c-ab3d-8ac64cb8dfcf.png/v1/fill/w_894,h_894,q_70,strp/mei_by_erhn_dawp5ir-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzk1YjhmODRlLWViZmQtNDQyNC1hNjcwLWFhYjA1ZmJiNmI1ZlwvZGF3cDVpci1mMTJjYTA4NC00MThmLTRkNmMtYWIzZC04YWM2NGNiOGRmY2YucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kfY3MOEbTglD6Qcoh0dtZYgF1OVgwJo7vFjJtJdyLbw",
        "title": "Mei"
    },
    {
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95b8f84e-ebfd-4424-a670-aab05fbb6b5f/daxak5l-908ced02-a34c-499c-aaa8-228871cb83e1.png/v1/fill/w_894,h_894,q_70,strp/angela_by_erhn_daxak5l-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzk1YjhmODRlLWViZmQtNDQyNC1hNjcwLWFhYjA1ZmJiNmI1ZlwvZGF4YWs1bC05MDhjZWQwMi1hMzRjLTQ5OWMtYWFhOC0yMjg4NzFjYjgzZTEucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.IEIGFKXjnRcBcFexDlJe7Ql02cQHT6rk2aU4CkBj6es",
        "title": "Angela"
    },
    {
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95b8f84e-ebfd-4424-a670-aab05fbb6b5f/de2r5f4-4d947428-81bb-4ad8-8c7e-6642687d1977.png/v1/fill/w_894,h_894,q_70,strp/amelie_by_erhn_de2r5f4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzk1YjhmODRlLWViZmQtNDQyNC1hNjcwLWFhYjA1ZmJiNmI1ZlwvZGUycjVmNC00ZDk0NzQyOC04MWJiLTRhZDgtOGM3ZS02NjQyNjg3ZDE5NzcucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.7_vVwTsO2u9auxDlCQl8RbAAhi53tcvGVR75f85QZJg",
        "title": "Amelie"
    },
    {
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95b8f84e-ebfd-4424-a670-aab05fbb6b5f/demyabo-b7e2ffd8-7cd2-4006-802c-7ec14e34c04c.png/v1/fill/w_894,h_894/sayu_by_erhn_demyabo-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzk1YjhmODRlLWViZmQtNDQyNC1hNjcwLWFhYjA1ZmJiNmI1ZlwvZGVteWFiby1iN2UyZmZkOC03Y2QyLTQwMDYtODAyYy03ZWMxNGUzNGMwNGMucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.q8euuhXl6MbkwFHsQMhrJwNlbrs25xlNTGKjQ78AlhQ",
        "title": "Sayu"
    },
    {
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95b8f84e-ebfd-4424-a670-aab05fbb6b5f/dfng21b-e0e12546-ffe9-4e26-9535-caf0369a81a2.png/v1/fill/w_894,h_894,q_70,strp/iono_by_erhn_dfng21b-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzk1YjhmODRlLWViZmQtNDQyNC1hNjcwLWFhYjA1ZmJiNmI1ZlwvZGZuZzIxYi1lMGUxMjU0Ni1mZmU5LTRlMjYtOTUzNS1jYWYwMzY5YTgxYTIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sgRm0jXpaK_G5w2RrnqJ_614G3yscFQ7Wp5gfaIEUB4",
        "title": "Iono"
    },
    {
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95b8f84e-ebfd-4424-a670-aab05fbb6b5f/dh2mkym-dd32ec03-aab9-4bb4-b1be-01f2bf5fba36.png/v1/fill/w_894,h_894,q_70,strp/frieren_by_erhn_dh2mkym-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTIwIiwicGF0aCI6IlwvZlwvOTViOGY4NGUtZWJmZC00NDI0LWE2NzAtYWFiMDVmYmI2YjVmXC9kaDJta3ltLWRkMzJlYzAzLWFhYjktNGJiNC1iMWJlLTAxZjJiZjVmYmEzNi5wbmciLCJ3aWR0aCI6Ijw9OTIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.jUP2xIS6j3h4F5tl4TmzP7PBqWblOSecDz8w_xge9Ps",
        "title": "Frieren"
    },
    {
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95b8f84e-ebfd-4424-a670-aab05fbb6b5f/dhb9wv6-7f6bfdd9-6195-4eea-aec5-5d695e004fd8.png/v1/fill/w_880,h_880,q_80,strp/toph_by_erhn_dhb9wv6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODgwIiwicGF0aCI6IlwvZlwvOTViOGY4NGUtZWJmZC00NDI0LWE2NzAtYWFiMDVmYmI2YjVmXC9kaGI5d3Y2LTdmNmJmZGQ5LTYxOTUtNGVlYS1hZWM1LTVkNjk1ZTAwNGZkOC5wbmciLCJ3aWR0aCI6Ijw9ODgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.NX_JzM7f75EqAaGkqGKk59Do_KZoXpwdwhrRsSCcWjw",
        "title": "Toph"
    }
];

// Get the container element where the images will be inserted
const gallery = document.getElementById('gallery');

// Loop through the imageData array and create a card for each image
imageData.forEach(data => {
    // Create a new div for each card (drawing container)
    const drawingContainer = document.createElement('div');
    drawingContainer.classList.add('drawing-container'); // Add the class for styling

    // Create an <img> element for the image
    const imgElement = document.createElement('img');
    imgElement.src = data.image;  // Set the image source from the JSON
    imgElement.alt = data.title;  // Set the alt text from the JSON

    // Create a div for the title
    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');  // Add the class for styling
    cardTitle.textContent = data.title;    // Set the title text from the JSON

    // Append the <img> element to the drawing container
    drawingContainer.appendChild(imgElement);

    // Append the title (cardTitle) to the drawing container
    drawingContainer.appendChild(cardTitle);

    // Append the drawing container to the gallery
    gallery.appendChild(drawingContainer);
});
