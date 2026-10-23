import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  erro = signal('');
  enviado = signal(false);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
    lembrar: [false],
  });

  invalido(campo: 'email' | 'senha'): boolean {
    const c = this.form.controls[campo];
    return c.invalid && (c.touched || this.enviado());
  }

  entrar(): void {
    this.enviado.set(true);
    this.erro.set('');

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, senha, lembrar } = this.form.getRawValue();
    const mensagem = this.auth.entrar(email, senha, lembrar);

    if (mensagem) {
      this.erro.set(mensagem);
      return;
    }
    
    const voltar = this.route.snapshot.queryParamMap.get('voltar');
    const destino = voltar && voltar.startsWith('/') && !voltar.startsWith('//') ? voltar : '/';
    this.router.navigateByUrl(destino);
  }
}
