import { Injectable, Service, signal } from '@angular/core';
import { Tarefa } from '../components/shared/model/tarefa.entity';

@Service()
@Injectable({
    providedIn:'root',
})
export class TarefasService {
    private readonly _items = signal<Array<Tarefa>>([
        {id: crypto.randomUUID(), 
            title:"Desenvolvimento Angular", completed: false},
            {id: crypto.randomUUID(), 
                title:"Desenvolvimento com Framework", completed: false},
                {id: crypto.randomUUID(), 
                    title:"Desenvolvimento Web", completed: false},  
    ]);

    readonly items = this._items.asReadonly();

    toggle(id: string){
        this._items.update((items) =>
         items.map((item) => (item.id === id ?
            {...item, completed: !item.completed} : item)),
         );
    }

    remove(id: string){
        this._items.update((items) =>
        items.filter ((item) => item.id !== id));
    }

    add(title: string){
        const newTarefa: Tarefa = {
            id:crypto.randomUUID(),
            title,
            completed: false,
        };
        this._items.update((items)=> [...items,newTarefa]); 
    }
}
