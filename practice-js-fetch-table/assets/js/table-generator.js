export class TableGenerator {
    constructor(tableSelector = '', headers = [{}]) {
        // this.tableSelector = tableSelector;
        this.headers = headers;
        this.table = document.querySelector(tableSelector);
        this.dataList = [];
    }

    generateHead() {
        let head = this.table.querySelector('thead');
        if (!head) {
            head = document.createElement('thead');
            this.table.appendChild(head);
        }

        head.innerHTML = '';

        const tr = document.createElement('tr');
        head.appendChild(tr);

        // one header: {title: '#', key: 'id'},
        this.headers.forEach(header => {
            const th = document.createElement('th');
            tr.appendChild(th);
            th.innerText = header.title;
        });

        const th = document.createElement('th');
        tr.appendChild(th);
        th.innerText = 'manage';
    }

    generateBody() {
        let tbody = this.table.querySelector('tbody');
        if (!tbody) {
            tbody = document.createElement('tbody');
            this.table.appendChild(tbody);
        }

        tbody.innerHTML = '';

        this.dataList.forEach(row => {
            const tr = document.createElement('tr');
            tbody.appendChild(tr);

            // one header: {title: '#', key: 'id'},
            this.headers.forEach(header => {
                const td = document.createElement('td');
                tr.appendChild(td);
                td.innerText = row[header.key];
            });

            const td = document.createElement('td');
            tr.appendChild(td);
            const removeButton = document.createElement('button');
            td.appendChild(removeButton);
            removeButton.className = 'btn btn-danger table__button--remove';
            removeButton.innerHTML = '<span class="fa fa-trash"></span>';
            removeButton.id = row.id;
        });


    }

    generateTable(dataList = [{}]) {
        this.dataList = dataList;
        this.generateHead();
        this.generateBody();
    }
}
