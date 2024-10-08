import { Component } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent {

 //Objeto de formulario
 formulario = new FormGroup({
  nome: new FormControl('', [Validators.required,Validators.minLength(3)]),
  idade : new FormControl(null, [Validators.required,Validators.min(0), Validators.max(120)]),
  cidade : new FormControl('',[Validators.required,Validators.minLength(3)]),
  sexo : new FormControl('M', [Validators.required]),
  email : new FormControl('', [Validators.required, Validators.minLength(11)]),
  etnia : new FormControl('Preto', [Validators.required]),
  cpf : new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)])
 });

 //Visibilidade dos botões

 btnCadastrar: boolean= true;

 //Vetor

 vetor:Pessoa [] = [];

 //Armazenar índice da pessoa selecionada
 indice:number = -1;

 //Função Cadastrar

 cadastrar(){

  // Cadastro no vetor

  this.vetor.push(this.formulario.value as Pessoa);

  //Limpeza dos inputs

  this.formulario.reset();

  //Visualização no console
  //console.table(this.vetor);
 }

 selecionar(indice:number){

  //Atribuir o índice da pessoa.
  this.indice = indice;

  //Atribuir os dados da pessoa no formulario.
  this.formulario.setValue({
    nome: this.vetor[indice].nome,
    idade: this.vetor[indice].idade,
    cidade: this.vetor[indice].cidade,
    email: this.vetor[indice].email,
    etnia: this.vetor[indice].etnia,
    cpf: this.vetor[indice].cpf,
    sexo: this.vetor[indice].sexo
  });

//Visibilidade dos botões

this.btnCadastrar = false;
 }
 
 //Função de alteração

 alterar(){

  //alterar vetor

  this.vetor[this.indice] = this.formulario.value as Pessoa;

  //Limpar os inputs

  this.formulario.reset();

  //Visibilidade dos botões

  this.btnCadastrar = true;
 }
 
 cancelar(){
  this.formulario.reset();
  this.btnCadastrar = true;
 }

 remover(){
  this.vetor.splice(this.indice, 1);
  this.formulario.reset();
  this.btnCadastrar = true;
 }
}
