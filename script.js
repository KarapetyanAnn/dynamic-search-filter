const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { id: 5, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { id: 6, title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { id: 7, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997 },
    { id: 8, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { id: 9, title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967 },
    { id: 10, title: "The Shining", author: "Stephen King", year: 1977 },
];

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function createTable(data) {
    const table = document.getElementById('dynamicTable');
    table.innerHTML = "";

    data.forEach(book => {
        const rowHTML = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
            </tr>`;
        table.insertAdjacentHTML('beforeend', rowHTML);
    });
}

createTable(books);

const input = document.getElementById('input');
input.addEventListener('input', search);

function search() {
    const searchTerm = input.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');

    if (searchTerm !== '') {
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            let hasMatch = false;

            cells.forEach(cell => {
                const cellText = cell.textContent.toLowerCase();
                const index = cellText.indexOf(searchTerm);

                if (index > -1) {
                    hasMatch = true;

                    const before = cellText.substring(0, index);
                    const match = cellText.substring(index, index + searchTerm.length);
                    const after = cellText.substring(index + searchTerm.length);

                    cell.innerHTML = `${before}<span class="highlight">${match}</span>${after}`;
                } else {
                    cell.innerHTML = cellText;
                }
            });
            
            row.style.display = hasMatch ? '' : 'none';
        });
    } else {
        rows.forEach(row => {
            row.style.display = '';
            const cells = row.querySelectorAll('td');

            cells.forEach(cell => {
                cell.innerHTML = cell.textContent;
            });
        });
    }
}
