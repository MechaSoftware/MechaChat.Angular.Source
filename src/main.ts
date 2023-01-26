import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 651e671 (Update design + Start of communties)
function bootstrap() {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}
<<<<<<< HEAD
=======
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
>>>>>>> 33f497f (initial commit)
=======
>>>>>>> 651e671 (Update design + Start of communties)
