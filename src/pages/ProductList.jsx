import productData from '../data/data.json';
function ProductList() {
    return (
        <div className='grid grid-cols-3 gap-4'>
            {productData.data.map((product) => (
                <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-4 pt-4">
                        <img src={product.attributes.image} alt="Shoes" className="rounded-xl h-64 md:h-48 w-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title capitalize">{product.attributes.title}</h2>
                        <p>${product.attributes.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
