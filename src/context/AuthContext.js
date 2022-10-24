import React, {useState} from "react";

// 1 maak de context aan
export const AuthContext = React.createContext({});
// dan het providercomponent in de index.js zetten (wikkelen om <App/>
// 3. Maak een data-object aan, en
// 4. geef die mee in de value-property van de Provider
// 5. laat een willekeurig component de data uitlezen, via de useContextMethode.

// 2. Maak een eigen AuthContextProviderComponent aan.
//3. Geef daarin het AuthContext.Provider component terugmet children.
//4 wikkel AuthContextProviderComponent om app
// 5. maak een data object aan.
// 6.  Geef het dataobject mee via de value-property van de provider
// 7. Laat een willekeurig component de data uitlezen via de
// 8. useContext methode  const {user, role } = useContact(AuthContext);


function AuthContextProvider({children}){
    const [user, setUser] = useState('');

    const [isAuth, toggleAuth] = useState({
        isAuth: false,
        user: null
    });

    const data = {
        user: user,
        changeUser: setUser,
        role: 'admin', isAuthorised: true,
    }

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContextProvider;
