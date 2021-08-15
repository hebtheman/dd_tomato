
import "../../styles/introduction/introduction.css";

export default function Introduction() {
    return (
        <section className="intro-container">
            <h1>About</h1>
            <div className="container-1">
                <div className="box-1">
                    <img src="media/images/tomato1.jpg" alt="tomato1" />    
                </div>
                <div className="box-2">
                    <h3>Red tomatoes, raw</h3> 
                    <p>Nutritional value per 100 g &#40; 3.5 oz &#41;</p>
                    <ListComponent />
                    <p>Percentages are relative to US recommendations for adults. <br/> Source: <a href="https://fdc.nal.usda.gov//">USDA Nutrient Database</a></p>
                </div>
            </div>
            <div className="container-2">
                <h2>Varieties</h2>
                <p>
                    There are around 7500 tomato varieties grown
                    for various purposes. Heirloom tomatoes are
                    becoming increasingly popular, particularly
                    among home gardeners and organic producers,
                    since they tend to produce more interesting and
                    flavorful crops at the cost of disease resistance
                    and productivity. In 1973, Israeli scientists
                    developed the world's first long shelf-life
                    commercial tomato varieties.
                    <br/>
                    Tomato varieties are roughly divided into
                    several categories, based mostly on shape and
                    size.
                </p>
                <VarList />
            </div>
        </section>
    )
}

const List = ({data}) => {
    return (
        <ul>
        {data.map(({name, value}, i) => (
            <li key={i}>
                <span>{name}</span>
                {' '}
                <span>{value}</span>
            </li>
     ))}
        </ul>
    )
}

const data = [
    {name: 'Energy', value: '74kj (18 kcal)'},
    {name: 'Carbohydrates', value: '3.9 g'},
    {name: 'Sugars', value: '2.6 g'},
    {name: 'Dietary fiber', value: '1.2 g'},
    {name: 'Fat', value: '0.2 g'},
    {name: 'Protein', value: '0.9 g'},
    {name: 'Water', value: '94.5 g'},
    {name: 'Vitamin A equiv.', value: '42 μg (5%)'},
    {name: 'lutein and zeaxanthin', value: '123 μg'},
    {name: 'Vitamin C', value: '14 mg (17%)'},
    {name: 'Vitamin E', value: '0.54 mg (4%)'},
    {name: 'Potassium', value: '237 mg (5%)'},
]

const ListComponent = () => {
    return (
        <List data={data} />
    )
}

function VarList() {
    return (
        <ul>
            <li>"Slicing"/"globe" tomatoes</li>
            <li>Beefsteak tomatoes</li>
            <li>Oxheart tomatoes</li>
            <li>Plum tomatoes</li>
            <li>Pear tomatoes</li>
            <li>Cherry tomatoes</li>
            <li>Grape tomatoes</li>
            <li>Campari tomatoes</li>
        </ul>
    )
}

