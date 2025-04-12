import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // página inicial
  { path: 'conteudo/:id', component: ContentComponent }, // página de conteúdo
  { path: '**', redirectTo: '' } // fallback para rotas desconhecidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
