import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DonaldDuck from './DonaldDuck';
import Animation from './Animation';
import DisneyPrinces from './DisneyPrinces';

// import SubCategories from './SubCategories';

const ShopByCategory = () => {

    const [category, SetCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => SetCategory(data));
    }, [])

    const donalDuck=category.filter(category => category.subCategory==="donaldDuck")
    const animationCharacters=category.filter(category => category .subCategory==="animationCharacters")
    const disneyPrinces=category.filter(category => category.subCategory==="disneyPrinces")


    return (
        <div>
            <div className='font-sans text-3xl font-bold'>
                <h1 className='text-center font-bold'>Bestsellers</h1>
                <h2 className='text-center font-bold mt-6'>Top 3 Categories</h2>
                </div>
               
                   <Tabs className="text-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-sans ">
    <TabList className="font-sans text-2xl font-bold">
    <Tab>Donald Duck</Tab>
      <Tab>Animation Characters</Tab>
      <Tab>Disney princes</Tab>
    </TabList>

  <div>
  
   <TabPanel >
   <div className='flex justify-around'>
   {
    donalDuck.map(duck=><DonaldDuck
        key={duck._id}
        duck={duck}
    ></DonaldDuck>)
   }
   </div>
    </TabPanel>
    <TabPanel>
    <div className='flex justify-around'>
      {
        animationCharacters.map(animationCharacter=><Animation
        key={animationCharacter._id}
        animationCharacter={animationCharacter}
        >

        </Animation>)
      }
    </div>
    </TabPanel>
    <TabPanel>
    <div className='flex justify-around'>
      {
        disneyPrinces.map(disney=><DisneyPrinces
          key={disney._id}
          disney={disney}
        ></DisneyPrinces>)
      }
    </div>
    </TabPanel>
 
  </div>
  </Tabs>
           


            
        </div>
    );
};

export default ShopByCategory;
