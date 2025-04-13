import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // página inicial
  { path: 'conteudo/:id', component: ContentComponent }, // página de conteúdo
  { path: 'sobre', component: AboutComponent }, // página sobre 
  { path: 'contato', component: ContactComponent }, // página contato 
  { path: '**', redirectTo: '' } // fallback para rotas desconhecidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
