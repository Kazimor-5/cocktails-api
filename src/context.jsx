// ! FILES
import axios from 'axios';
import React, { createContext, useState, useEffect, useCallback } from 'react';

// * Creation of the context
export const CocktailContext = createContext();

// * URL API
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// * Creation of the Provider
export const CocktailProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [searchTerms, setSearchTerms] = useState('');

  const getResearch = useCallback(async () => {
    // * Loader state to true
    setIsLoading(true);
    // * Retrieval of the response
    const response = await axios.get(`${url}${searchTerms}`);
    // * Response destructuration
    const {
      data: { drinks },
    } = response;
    // * if there's data
    if (drinks) {
      // * then iteration over data array
      const newDrinks = drinks.map((drink) => {
        // * Retrieval of utils values
        const { idDrinks, strDrinks, strGlass, strAlcoholic, strDrinkThumb } =
          drink;
        // * Return of an objet with th renamed values
        return {
          id: idDrinks,
          name: strDrinks,
          glass: strGlass,
          info: strAlcoholic,
          img: strDrinkThumb,
        };
      });
      // * Affectation of the objet to the cocktails state
      setCocktails(newDrinks);
    } else {
      // * Else reset of to the cocktail state with an array
      setCocktails([]);
    }
    // * Loader state to false
    setIsLoading(false);
  }, [searchTerms]);

  // * Call the function when the it has been rerender
  useEffect(() => {
    getResearch();
  }, [searchTerms, getResearch]);

  const getCocktails = async () => {
    // * Loader state to false
    setIsLoading(true);
    // * Retrieval of the response
    const response = await axios.get(url);
    // * Response destructuration
    const {
      data: { drinks },
    } = response;
    // * Iteration on the object array
    const newDrinks = drinks.map((drink) => {
      // * Destructuration of the utils values
      const { idDrinks, strDrinks, strGlass, strAlcoholic, strDrinkThumb } =
        drink;
      // * Return of an objet with the renamed values
      return {
        id: idDrinks,
        name: strDrinks,
        glass: strGlass,
        info: strAlcoholic,
        img: strDrinkThumb,
      };
    });
    // * Affectation of the newDrink object to the cocktail array
    setCocktails(newDrinks);
    // * Loader state to false
  };

  // * Call the function when it has been rerender
  useEffect(() => {
    getCocktails();
  }, []);

  return (
    // * Return of the provider with the value inside it
    <CocktailContext.Provider
      value={{ cocktails, isLoading, searchTerms, setSearchTerms }}
    >
      {/* values dispatch to all the children */}
      {children}
    </CocktailContext.Provider>
  );
};
