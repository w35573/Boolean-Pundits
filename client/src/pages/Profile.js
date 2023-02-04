import { ChakraProvider } from "@chakra-ui/react";
import Cover from '../components/UserProfile/Cover'
import Main from '../components/UserProfile/Main'
import { theme } from '../components/UserProfile/helpers'
import '../styles/profile.css'

function Profile() {
    return (
        <div className="profile-wrapper">
            <ChakraProvider theme={theme}>
                <Cover />
                <Main />
            </ChakraProvider>
        </div>
    );
}

export default Profile;
