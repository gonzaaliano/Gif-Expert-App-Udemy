import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    //1era Forma
    setCategories([newCategory, ...categories]);

  }

  return (
    <>
      {/*Titulo Aplicacion*/}
      <h1>GIF EXPERT APP</h1>

      {/*Input o buscador*/}
      <AddCategory


        onNewCategory={(value) => onAddCategory(value)}

      />

      {categories.map(category =>
      (
        <GifGrid key={category}
          category={category} />
      )


      )}

      {/*Gif Item*/}
    </>

  )
}


