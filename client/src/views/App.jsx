
import { BrowserRouter} from 'react-router-dom';

import RenderFooter from '../components/Footer/RenderFooter';
import RenderHeader from '../components/Header/RenderHeader';
import RouterBody from '../router/Routes/RouterBody';

import '../style/styleMain.scss';
import ScrollToTopRouter from './ScrollToTopRouter';

import { withErrorBoundary } from 'react-error-boundary';
import RenderErrorBounDary from '../components/error/RenderErrorBounDary';
import RenderMaintenance from './RenderMaintenance';
import axios from 'axios';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isTokenExists } from '../helpers/authToken';

axios.defaults.baseURL = 'http://localhost:9000'
axios.defaults.withCredentials = true


function App() {

  const MAINTENANCEPAGE = false;
  const AUTH_LOGIN = false;

  const isTokenAuthExists = isTokenExists();

  return (

    <>
      <BrowserRouter>
        <div className="App">
          {
            MAINTENANCEPAGE ?
              <RenderMaintenance />
              :
              <>
                {/* {
                  AUTH_LOGIN ?
                    <>
                      <RouterAuth />
                    </>
                    :
                    <> */}
                      {isTokenAuthExists ?<RenderHeader />: ""}
                      <ToastContainer
                        position="bottom-center"
                        theme="dark"
                      />
                      <RouterBody />
                      <RenderFooter />
                      {/* <RouterVideoPlayMovie/> */}
                      <ScrollToTopRouter />
                    </>
                // }


              // </>
          }
        </div>
      </BrowserRouter>
      {/* <RenderLoadingStart /> */}
    </>

  )
}

export default withErrorBoundary(App, {
  FallbackComponent: RenderErrorBounDary
});