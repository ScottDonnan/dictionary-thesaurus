import { useState } from "react";
import styled from "styled-components";
import History from "./History";

function Search ({loggedInUser, getWordDefinition, getWordSynonym}) {
    const [searchValue, setSearchValue] = useState("") 
    const [searchSwitcher, setSearchSwitcher] = useState(true)
    const [historyList, setHistoryList] = useState([])
    
    function handleChange(e) {
        e.preventDefault()
        setSearchValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        searchSwitcher ? getWordDefinition(searchValue) : getWordSynonym(searchValue)
        
        const temp = historyList
        if (!temp.includes(searchValue)) {
            setHistoryList([...temp, searchValue])
        }
    }

    const dictionaryOn = () => setSearchSwitcher(switcher => switcher = true)
    const thesaurusOn = () => setSearchSwitcher(switcher => switcher = false)
    
    
    return(
        <SearchPage>
            <SearchBox>
                <Form onSubmit={handleSubmit}>
                    <SearchBar type="text" name="search" value={searchValue} onChange={handleChange} />
                    <SearchButton type="submit" value="Submit">Search</SearchButton>
                </Form>
                {searchSwitcher ? <ButtonStyled>Dictionary</ButtonStyled> : <Button onClick={dictionaryOn}>Dictionary</Button>}
                {searchSwitcher ? <Button onClick={thesaurusOn}>Thesaurus</Button> : <ButtonStyled>Thesaurus</ButtonStyled>}
            </SearchBox>
            {loggedInUser ? <History historyList={historyList}/> : null}
        </SearchPage>
    )
}

export default Search

const SearchPage = styled.div `
  background-color: #ffffff;
  padding: 20px;
  font-family: Helvetica, sans-serif
  margin: 80px 100px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .5), 0 0 40px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`

const SearchBox = styled.div `
    display: flex;
    justify-content: center;
`

const Form = styled.form `
    display: flex;
    font-family: Helvetica, sans-serif;
    border-radius: 15px;
    width: 66%;
`
const ButtonStyled = styled.button `
    font-family: Helvetica, sans-serif;
    background-color: #3165a5;
    padding: 15px 45px;
    margin: 10px;
    
    color: white;
    border-radius: 15px;

`
const Button = styled.button`
    background-color: white;
    font-family: Helvetica, sans-serif;
    padding: 15px 45px;
    margin: 10px;
    color: black;
    border-radius: 15px;
`
const SearchButton = styled.button`
    background-image: linear-gradient(to right, #2BC0E4 0%, #EAECC6  51%, #2BC0E4  100%)}  
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    font-family: Helvetica; sans-serif;
    transition: 0.5s;
    background-size: 200% auto;
    color: black;            
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
          }

          &:hover {
            background-position: right center; 
            color: #fff;
            text-decoration: none;
          
         
`

const SearchBar = styled.input `
    font-family: Helvetica, sans-serif;
    display: flex;
    border-radius: 15px;
    width: 75%;
    height: 75%;
    font-size: 30px;

`
