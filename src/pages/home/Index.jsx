import React, { useState } from 'react';
import CategoryTab from './index/CategoryTab';
import SubcategoryTab from './index/SubcategoryTab';
import Title from '../../components/Title'; // Import the Title component

function Index() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [subcategories, setSubcategories] = useState([]);

    const handleSelectCategory = (category, subcategories) => {
        setSelectedCategory(category);
        setSubcategories(subcategories || []);
    };

    return (
        <div className="mx-auto container">
            {/* Set the page title for the home page */}
            <Title title="Home" />
            
            <CategoryTab onSelectCategory={handleSelectCategory} />
            <div className='mt-4'>
                <SubcategoryTab selectedCategory={selectedCategory} subcategories={subcategories} />
            </div>
        </div>
    );
}

export default Index;
