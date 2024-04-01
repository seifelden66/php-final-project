import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideRouter(routes), provideHttpClient()],
=======
  providers: [provideRouter(routes), provideHttpClient()]
>>>>>>> adb6e7c4b3758af35b223b0f197f641406f7025b
};
