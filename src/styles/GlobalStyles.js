import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
:root{
    --primary-blue:#79a3f2;
    --blue-sky:#5096f2;
    --red:#f26363;
    --green:#8a8c45;
    --grey:#707070;
    --black:#070707;
    --white:#f2f2f2;
}
*{
    box-sizing:border-box;
    padding:0;
    margin:0;
}
html,body{
    height:100%;
}
html{
    font-size: 100%;
}
body{
    background:var(--white);
    font-family: oscine, sans-serif;
    font-style: normal;
    font-weight: 400;
    letter-spacing:1px;
}
h1,h2,h3,h4,h5,h6{
    font-family: decoy, serif;
    font-style: normal;
    text-transform: capitalize;
    text-align: center;
    
}

#root{
    display:flex;
    flex-direction: column;
    height: 100%;
}

.wrapper{
    flex:1 0 auto;
}
a:link {
  color: var(--black);
  text-decoration:none;
}
a:hover {
  color: var(--primary-blue);
}

/*homepage-start*/
h4 {
    text-transform: capitalize;
    letter-spacing: 0.5px;
    font-size: 0.8rem;
    text-align: center;
    margin-top: -1.25rem;
    font-family: oscine, sans-serif;
    color: var(--red);
    @media (max-width: 768px) {
        margin: -1rem;
      font-size: 0.5rem;
    }
  }
/*Buttons */
.btn{
    background-color:var(--red);
    border:none;
    padding: 0 1rem;
    border-radius:1rem 0 1rem 0;
    color:var(--black);
    &:hover{
        background-color:var(--green);
        color:var(--white);
    }
}
/*card */
h2 {
    margin: 1.5rem 0;
}
.card-para {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-title.h5 {
    text-align: center;
    text-transform: capitalize;
    font-weight: bold;
  }
.card-img-top {
    margin-top: 0.5rem;
    height: 15rem;
    width: 100%;
  }
  .card-text {
    text-align: center;
  }
 
/*homefeatures*/
.icon {
    color: var(--red);
    margin-right: 5px;
  }

/*hotels*/
.input-search{
    padding:.5rem;
    background: transparent;
    border-radius:0 1rem 1rem 0;
}
/*footer */
.listgroups {
    display: flex;
    justify-content: space-between;
    
  }
  .list-group-item {
    border: none;
    background: inherit;
    text-transform: capitalize;
  }


`;
export default GlobalStyles;
