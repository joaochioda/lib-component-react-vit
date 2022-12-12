// styles/globalStyles.js
import { createGlobalStyle } from "styled-components";
export interface ThemeProps {
  theme: {
    background: string;
    titles: string;
    text: string;
    accent: string;
    color: {
      blue: {
        [key in "900" | "800" | "700" | "300" | "200" | "100"]: string;
      };
      green: {
        [key in "900" | "400" | "100"]: string;
      };
      red: {
        [key in "900" | "400" | "100"]: string;
      };
      yellow: {
        [key in "900" | "400" | "100"]: string;
      };
      black: {
        [key in "900" | "400"]: string;
      };
      white: {
        [key in "900" | "400"]: string;
      };
    };
    size: {
      [key in "xxxs" | "xxs" | "xs" | "s" | "sm" | "md" | "lg" | "xl"]: string;
    };
    spacing: {
      [key in
        | "quarck"
        | "nano"
        | "xxxs"
        | "xxs"
        | "xs"
        | "sm"
        | "md"
        | "ld"
        | "xl"
        | "xxl"]: string;
    };
    spacingInset: {
      [key in "quarck" | "nano" | "xs" | "sm" | "md" | "lg"]: string;
    };
    weight: {
      [key in "light" | "regular" | "medium" | "semibold" | "bold"]: string;
    };
    border: {
      [key in "hairline" | "thin" | "thick" | "heavy"]: string;
    };
    breakpoints: {
      [key in "mobile" | "desktop"]: string;
    };
    custom: {
      h1: {
        color: string;
      };
    };
  };
}

export default createGlobalStyle`

  body {
		background: ${(props: ThemeProps) => props.theme.background};
    color: ${(props: ThemeProps) => props.theme.color.black[400]};
		font-family: 'Poppins', sans-serif;
    line-height: 1rem;
  }
  
  span, p, button {
    color: ${(props: ThemeProps) => props.theme.color.black[400]};
  }

  h1 {
    font-size: ${(props: ThemeProps) => props.theme.size.s} ;
    font-weight: ${(props: ThemeProps) => props.theme.weight.medium} ;
    line-height: 1.5rem;
    letter-spacing: -0.05em;
    color: ${(props: ThemeProps) =>
      props.theme.custom?.h1?.color || props.theme.color.black[400]};
  }
  
  h2 {
    font-size: ${(props: ThemeProps) => props.theme.size.lg};
    font-weight: ${(props: ThemeProps) => props.theme.weight.light};
    line-height: 3.375rem;
    letter-spacing: -0.05em;
    color: ${(props: ThemeProps) => props.theme.color.black[400]};
  }
  
  h3 {
    font-size: ${(props: ThemeProps) => props.theme.size.md};
    font-weight: ${(props: ThemeProps) => props.theme.weight.regular};
    line-height: 3rem;
    letter-spacing: -0.05em;
    color: ${(props: ThemeProps) => props.theme.color.black[400]};
  }
  
  h4 {
    font-size: ${(props: ThemeProps) => props.theme.size.sm};
    font-weight: ${(props: ThemeProps) => props.theme.weight.medium};
    line-height: 2.25rem;
    letter-spacing: -0.05em;
    color: ${(props: ThemeProps) => props.theme.color.black[400]};
  }
  
  h5 {
    font-size: ${(props: ThemeProps) => props.theme.size.s} ;
    font-weight: ${(props: ThemeProps) => props.theme.weight.medium} ;
    line-height: 1.5rem;
    letter-spacing: -0.05em;
    color: ${(props: ThemeProps) => props.theme.color.black[400]};
  }
  
  h6 {
    font-size: .875rem;
    font-weight: ${(props: ThemeProps) => props.theme.weight.medium};
    line-height: 1.3125rem;
    letter-spacing: -0.05em;
    color: ${(props: ThemeProps) => props.theme.color.black[400]};
  }
  
  p {
    font-size: ${(props: ThemeProps) => props.theme.size.s};
    font-weight: ${(props: ThemeProps) => props.theme.weight.regular};
    line-height: 1.5rem;
    letter-spacing: -0.05em;
    color: ${(props: ThemeProps) => props.theme.color.black[400]};
  }

    * {
      scrollbar-width: thin;
      scrollbar-color: #BCBCBC transparent;
    }
  
    *::-webkit-scrollbar {
      width: 1rem;
    }
    
    *::-webkit-scrollbar-track {
      background: transparent;
      margin-top: .25rem;
    }
    
    *::-webkit-scrollbar-thumb {
      background: #BCBCBC;
      border: .3125rem transparent solid;
      background-clip: padding-box;
      border-radius: 1.5rem;
    }

.custom-modal-product .chakra-modal__content {
  border-radius: 0;
  height: 38.4375rem;
  max-height: 80vh;
  margin-top: 0px;
  margin-bottom: 0px;
  /* overflow: overlay; */
}

.custom-modal-product .chakra-modal__body {
  overflow: scroll;
}

.custom-modal-product .chakra-modal__content-container {
  padding: 0px 10px ;
}

.custom-modal-product .chakra-modal__header {
  font-size: 16px ;
  padding: 0.875rem 2.1875rem 1.25rem 1.25rem ;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.custom-modal-product .defaultmodal__header--backbutton {
  display: flex;
  align-items: center;
  display: unset;
  cursor: pointer;
  padding: .3125rem .6125rem .3125rem 0;
  transition: all .2s ease-in-out;
}

.custom-modal-product .defaultmodal__header--closebutton.desktop {
  display: flex; 
}
.custom-modal-product .defaultmodal__header--closebutton.mobile {
  display: none; 
}

.custom-modal-product .defaultmodal__header--closebutton {
  width: 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s ease-in-out;
  cursor: pointer;
}

.custom-modal-product .defaultmodal__header--backbutton:hover, 
.custom-modal-product .defaultmodal__header--closebutton:hover {
  background: rgba(0, 0, 0, 0.06);
}

.custom-modal-product .defaultmodal__header--title {
  padding-right: 1rem;
  display: none;
}

.custom-modal-product .chakra-modal__close-btn {
  border-radius: 0 ;
}

.custom-modal-product .defaultmodal__banner--content img {
  width: 100%;
}

.custom-modal-product .chakra-modal__close-btn {
  display: none;
}

@media (max-width: 550px) {
  .custom-modal-product .defaultmodal__header--backbutton {
    display: none;
  }
  .custom-modal-product .defaultmodal__header--title {
    display: unset;
  }
  .custom-modal-product .defaultmodal__header--closebutton.desktop {
    display: none; 
  }
  .custom-modal-product .defaultmodal__header--closebutton.mobile {
    display: flex; 
  }
  .custom-modal-product .banner-mobile {
    display: unset;
  }
  .custom-modal-product .banner-desktop {
    display: none;
  }
}

@media (min-width: 550px) {
  .custom-modal-product .chakra-modal__header {
    padding: 0.875rem 2.1875rem 0rem 1.25rem ;
  }
  .custom-modal-product .banner-mobile {
    display: none;
  }
  .custom-modal-product .banner-desktop {
    display: unset;
  }
}
.specification__accordion .chakra-accordion__item {
  border: none ;
}

.specification__accordion .chakra-accordion__item > button{
  padding: 0.625rem 0.625rem 0.625rem 0;
  font-weight: 500 ;
}

.specification__accordion .chakra-accordion__item .chakra-accordion__panel {
  padding: 0.325rem;
}
.specefication-wine__accordion .chakra-accordion__item {
  border: none ;
}

.specefication-wine__accordion .chakra-accordion__item > button{
  padding: 0.625rem 0.625rem 0.625rem 0;
  font-weight: 500 ;
}

.specefication-wine__accordion .chakra-accordion__item .chakra-accordion__panel {
  padding: 0.325rem;
}
.specefication-shoes__accordion .chakra-accordion__item {
  border: none ;
}

.specefication-shoes__accordion .chakra-accordion__item > button{
  padding: 0.625rem 0.625rem 0.625rem 0;
  font-weight: 500 ;
}

.specefication-shoes__accordion .chakra-accordion__item .chakra-accordion__panel {
  padding: 0.325rem;
}
.custom-modal-products .chakra-modal__content {
  border-radius: 0;
  height: 44rem;
  /* overflow: overlay; */
}

.custom-modal-products .chakra-modal__content-container {
  padding: 0px 10px ;
}

.custom-modal-products .chakra-modal__header {
  font-size: 16px ;
  padding: 0.875rem 1.1875rem 1.25rem 1.25rem ;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.custom-modal-products .defaultmodal__header--backbutton {
  display: flex;
  align-items: center;
  display: unset;
  cursor: pointer;
  padding: .3125rem .6125rem .3125rem 0;
  transition: all .2s ease-in-out;
}

.custom-modal-products .defaultmodal__header--closebutton.desktop {
  height: 2rem;
  display: flex; 
}
.custom-modal-products .defaultmodal__header--closebutton.mobile {
  display: none; 
}

.custom-modal-products .defaultmodal__header--closebutton {
  width: 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s ease-in-out;
  cursor: pointer;
}

.custom-modal-products .defaultmodal__header--backbutton:hover, 
.custom-modal-products .defaultmodal__header--closebutton:hover {
  background: rgba(0, 0, 0, 0.06);
}

.custom-modal-products .chakra-modal__close-btn {
  border-radius: 0 ;
}

.custom-modal-products .banner-desktop {
  background-image: url("http://localhost:3000/src/assets/brand-images/banner-desktop-vertical.png");
  background-repeat: repeat-y;
}

.custom-modal-products .defaultmodal__banner--content {
  height: 100%;
}

.custom-modal-products .defaultmodal__banner--content img {
  height: 100%;
}

.custom-modal-products .chakra-modal__close-btn {
  display: none;
}

.custom-modal-products .custom-modal-products--modalcontent {
  height: 100%;
  display: flex;
}
.custom-modal-products .defaultmodal__content--container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.custom-modal-products .chakra-modal__body {
  padding: 0;
  overflow: auto;
  height: 100%;
}

@media (min-width: 550px) {
  .custom-modal-products .banner-desktop {
    display: unset;
  }
  .custom-modal-products .banner-mobile  {
    display: none;
  }
}

@media (max-width: 550px) {
  .custom-modal-products .chakra-modal__header {
    padding: 1.25rem 1.1875rem 1.25rem 1.25rem ;
  }
  .custom-modal-products .banner-desktop {
    display: none;
  }
  .custom-modal-products .banner-mobile  {
    display: unset;
  }
  .custom-modal-products .defaultmodal__header--backbutton {
    display: none;
  }
 
  .custom-modal-products .chakra-modal__content {
    height: 80vh;
  }
}
.specification-furniture__accordion .chakra-accordion__item {
  border: none ;
}

.specification-furniture__accordion .chakra-accordion__item > button{
  padding: 0.625rem 0.625rem 0.625rem 0;
  font-weight: 500 ;
}

.specification-furniture__accordion .chakra-accordion__item .chakra-accordion__panel {
  padding: 0.325rem;
}

.slick-track {
  display: flex !important;
}


`;
