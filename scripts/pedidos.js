window.onload = function() {
    const tabela = document.querySelector('#tabelaPedidos tbody');
    const pedidos = JSON.parse(localStorage.getItem('pedidosFinalizados')) || [];

    pedidos.forEach((pedido, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${pedido.cliente}</td>
            <td>${pedido.endereco}</td>
            <td>${pedido.produto}</td>
            <td>R$ ${pedido.preco.toFixed(2)}</td>
            <td>${pedido.ingredientes ? pedido.ingredientes.join(', ') : ''}</td>
            <td>${pedido.dataPedido}</td>
            <td>${pedido.horaPedido}</td>
        `;
        tabela.appendChild(tr);
    });
}