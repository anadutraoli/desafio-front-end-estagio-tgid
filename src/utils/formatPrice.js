export default function formatPrice(valor) {
    const formatado = valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return formatado
}