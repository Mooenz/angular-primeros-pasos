import { Component } from '@angular/core';
import { Producto } from './producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  widthImg = 10;
  name = 'Mooenz';
  projects = 24;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Manu',
    age: 29,
    avatar: 'https://source.unsplash.com/random',
  };
  names: string[] = ['Jose', 'Cata', 'Mooenz'];
  newName: string = '';

  box = {
    width: 100,
    height: 100,
    bg: 'red',
  };

  registro = {
    name: '',
    email: '',
    password: '',
  }

  productos: Producto[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
    },
  ];
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  plusAge() {
    this.person.age += 1;
  }

  subtractAge() {
    this.person.age -= 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  agregarNombre() {
    this.names.push(this.newName);
    this.newName = '';
  }

  eliminarNombre(index: number) {
    this.names.splice(index, 1);
  }

  // Desafio
  arrToDos: string[] = [
    'Estudiar 2 horas enplatzi',
    'Tomar un descanso de 30 minutos',
    'Poner en practica lo aprendido',
  ];

  toDo: string = '';

  addToDos(argumentToDo: string) {
    this.arrToDos.push(argumentToDo);
    this.toDo = '';
  }

  onRegister() {
    console.log(this.registro);
  }
}
