import { Injectable } from '@angular/core';

enum Task {
  TASK = 'TASK',
  NOTE = 'NOTE',
}

enum Folder {
  TASK_GROUP = 'TASK_GROUP',
  NOTE_GROUP = 'NOTE_GROUP',
}

enum TaskStatus {
  TODO = 'TODO',
  DONE = 'DONE',
  DELETED = 'DELETED',
}

enum FolderStatus {
  CREATE = 'CREATE',
  DELETED = 'DELETED',
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  retrieveTasks() {
    return this.tasks;
  }

  retrieveFolders() {
    return this.folders;
  }

  // retrieveTasksGroup() {
  //   var tasksGroup: any = [];
  //   this.folders.forEach((folder) => {
  //     if (folder.type == Folder.TASK_GROUP) {
  //       tasksGroup.push(folder);
  //     }
  //   });
  //   return tasksGroup;
  // }

  private folders = [
    {
      folderNumber: 'e1k3g',
      name: 'Marché',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae',
      status: FolderStatus.CREATE,
      tasks: [
        {
          taskNumber: '5uy8m',
          label: "Palette d'oeuf",
          status: TaskStatus.TODO,
          price: 3750,
        },
        {
          taskNumber: 'ztl4anc2di9',
          label: 'Saucisson',
          status: TaskStatus.TODO,
          price: 2600,
        },
        {
          taskNumber: 'a7t2k',
          label: 'Lait Nido',
          status: TaskStatus.DELETED,
          price: 2750,
        },
        {
          taskNumber: 'v9f1n',
          label: 'Glace',
          status: 'DONE',
          price: 2700,
        },
        {
          taskNumber: 'r2j6d',
          label: 'Yaourt',
          status: TaskStatus.DONE,
          price: 1550,
        },
        {
          taskNumber: 'e5x9q',
          label: 'Pain ancien',
          status: TaskStatus.DONE,
          price: 500,
        },
        {
          taskNumber: 'k3w7z',
          label: 'Viande haché',
          status: TaskStatus.DONE,
          price: 1100,
        },
      ],
    },
    {
      folderNumber: 'i7w4y',
      name: 'Séries',
      description:
        'quibusdam illo iusto, magni doloremque consectetur maiores sit asperiores ullam atque vero necessitatibus',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
      tasks: [
        {
          taskNumber: 'g6h4p',
          label: 'The big bang theory',
          status: TaskStatus.TODO,
          price: 11500,
        },
        {
          taskNumber: 'm1c8t',
          label: 'Silicon valley',
          status: TaskStatus.TODO,
          price: 5000,
        },
        {
          taskNumber: 'b4s5y',
          label: 'YOU',
          status: TaskStatus.DELETED,
          price: 1500,
        },
        {
          taskNumber: 'f8l2r',
          label: 'Last last',
          status: 'DONE',
          price: 2000,
        },
        {
          taskNumber: 'd2v7t',
          label: 'ECHOS',
          status: TaskStatus.DONE,
          price: 2600,
        },
        {
          taskNumber: 'z4x6c',
          label: 'OUR HOUSE',
          status: TaskStatus.DONE,
          price: 5800,
        },
        {
          taskNumber: 's8b3n',
          label: 'The big door prize',
          status: TaskStatus.DONE,
          price: 9000,
        },
      ],
    },
    {
      folderNumber: 'o4c5n',
      name: 'Films',
      description: 'Amet consectetur adipisicing elit. Dicta recusandae',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
      tasks: [
        {
          taskNumber: 'k6q1j',
          label: 'Mounstrous',
          status: TaskStatus.TODO,
          price: 8000,
        },
        {
          taskNumber: 'm9h4g',
          label: 'Hunter ker, kill her',
          status: TaskStatus.TODO,
          price: 1200,
        },
        {
          taskNumber: 'w5p8f',
          label: 'Play dead',
          status: TaskStatus.DELETED,
          price: 4600,
        },
        {
          taskNumber: 'j7l2r',
          label: 'The communion girl',
          status: 'DONE',
          price: 5950,
        },
        {
          taskNumber: 'f6g1y',
          label: 'Winnie the pooh: Blood and honey',
          status: TaskStatus.DONE,
          price: 5670,
        },
        {
          taskNumber: 'c3n2v',
          label: 'Le purgatoire des intimes',
          status: TaskStatus.DONE,
          price: 9650,
        },
        {
          taskNumber: 'r9k5t',
          label: "L'exorciste du vatican",
          status: TaskStatus.DONE,
          price: 18500,
        },
      ],
    },
    {
      folderNumber: 't3f9j',
      name: 'Animés',
      description: 'Maiores sit asperiores ullam atque vero necessitatibus',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
      tasks: [
        {
          taskNumber: 'f1j6h',
          label: 'Jujutsu Kaize',
          status: TaskStatus.TODO,
          price: 9000,
        },
        {
          taskNumber: 's9n4v',
          label: 'GTO',
          status: TaskStatus.TODO,
          price: 9000,
        },
        {
          taskNumber: 'p8x7z',
          label: 'Death note',
          status: TaskStatus.DELETED,
          price: 9000,
        },
        {
          taskNumber: 'l4b5t',
          label: 'Demon slayer',
          status: 'DONE',
          price: 9000,
        },
        {
          taskNumber: 'h2w6c',
          label: 'Prison school',
          status: TaskStatus.DONE,
          price: 9000,
        },
        {
          taskNumber: 'r5t7d',
          label: 'Naruto',
          status: TaskStatus.DONE,
          price: 9000,
        },
        {
          taskNumber: 'k9j8g',
          label: "Koruko's basket",
          status: TaskStatus.DONE,
          price: 9000,
        },
      ],
    },
    {
      folderNumber: 'x6s2h',
      name: 'Loving',
      description: 'Adipisicing elitero necessitatibus',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
      tasks: [
        {
          taskNumber: 'z1x2n',
          label: 'You',
          status: TaskStatus.TODO,
          price: 9000,
        },
        {
          taskNumber: 'c3q6r',
          label: 'Know',
          status: TaskStatus.TODO,
          price: 9000,
        },
        {
          taskNumber: 'm7f5y',
          label: 'That',
          status: TaskStatus.DELETED,
          price: 9000,
        },
        {
          taskNumber: 'v6t9p',
          label: 'I',
          status: 'DONE',
          price: 9000,
        },
        {
          taskNumber: 'd8n7h',
          label: 'Love',
          status: TaskStatus.DONE,
          price: 9000,
        },
        {
          taskNumber: 'g1b6y',
          label: 'My',
          status: TaskStatus.DONE,
          price: 9000,
        },
        {
          taskNumber: 'w5j2r',
          label: 'SELF',
          status: TaskStatus.DONE,
          price: 9000,
        },
      ],
    },
    {
      folderNumber: 'z9n8c',
      name: 'Préférée',
      description:
        'To, magni doloremque consectetur maiores sit necessitatibus',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
      tasks: [
        {
          taskNumber: 'x7n6t',
          label: 'Chaussure',
          status: TaskStatus.TODO,
          price: 9000,
        },
        {
          taskNumber: 'q9m5f',
          label: 'Tenue de sport',
          status: TaskStatus.TODO,
          price: 9000,
        },
        {
          taskNumber: 'y2t1k',
          label: 'Coiffure',
          status: TaskStatus.DELETED,
          price: 9000,
        },
        {
          taskNumber: 'b3v7l',
          label: 'Iphone',
          status: 'DONE',
          price: 9000,
        },
        {
          taskNumber: 'n8h6j',
          label: 'AirPods',
          status: TaskStatus.DONE,
          price: 9000,
        },
        {
          taskNumber: 'u5q9p',
          label: 'Ipod Touch',
          status: TaskStatus.DONE,
          price: 9000,
        },
        {
          taskNumber: 'a6z8f',
          label: 'Yeah',
          status: TaskStatus.DONE,
          price: 9000,
        },
      ],
    },
    {
      folderNumber: 'f0iB3R',
      name: 'Cours',
      description: 'Maiores sit asperiores ullam atque vero necessitatibus',
      type: Folder.NOTE_GROUP,
      status: FolderStatus.CREATE,
      tasks: [],
    },
    {
      folderNumber: 'c0Ur1n',
      name: 'Journal',
      type: Folder.NOTE_GROUP,
      status: FolderStatus.DELETED,
      tasks: [],
    },
    {
      folderNumber: 'h0TBpS',
      name: 'HTTP',
      description: 'Maiores sit asperiores ullam atque vero necessitatibus',
      type: Folder.NOTE_GROUP,
      status: FolderStatus.CREATE,
      tasks: [],
    },
    {
      folderNumber: 'n0v1r0',
      name: 'Nuclino',
      description: 'Maiores sit asperiores ullam atque vero necessitatibus',
      type: Folder.NOTE_GROUP,
      status: FolderStatus.CREATE,
      tasks: [],
    },
  ];

  private tasks = [
    {
      taskNumber: 'zt7usc2eil',
      label: 'Pain au chocolat',
      status: TaskStatus.DONE,
      date: '23 Avril',
      price: 5625,
    },
    {
      taskNumber: '77e6cs34A',
      label: 'Sucre en poudre',
      status: TaskStatus.TODO,
      date: '2 Mars',
      type: Task.NOTE,
      price: 1150,
    },
    {
      taskNumber: 'zt7uAc2eil',
      label: 'Raisin sec',
      status: TaskStatus.DELETED,
      date: '23 Dec',
      price: 1500,
    },
    {
      taskNumber: 'a7ee1s34A',
      label: 'Lait',
      status: TaskStatus.DELETED,
      date: '23 Oct',
      type: Task.NOTE,
      price: 50,
    },
    {
      taskNumber: 'zt7ysc2eil',
      label: 'Rien',
      status: TaskStatus.DELETED,
      date: '23 Nov',
      price: 300,
    },
    {
      taskNumber: 'c7eTcs34b',
      label: 'dahi',
      status: TaskStatus.DONE,
      date: '10 Mai',
      type: Task.NOTE,
      price: 25,
    },
    {
      taskNumber: 'ztl4anc2di9',
      label: 'Pizza',
      status: TaskStatus.TODO,
      date: '8 Avr',
      price: 8500,
    },
    {
      taskNumber: 'z7we9s340',
      label: 'Pot glâce',
      status: TaskStatus.TODO,
      date: '17 Juin',
      type: Task.NOTE,
      price: 0,
    },
    {
      taskNumber: 'zt7usc2eil',
      label: 'Poulet yassa',
      status: TaskStatus.DONE,
      date: '5 Fev',
      price: 6725,
    },
    {
      taskNumber: '21eFci03i8',
      label: 'Carpachian',
      status: TaskStatus.DELETED,
      date: '3 Janv',
      type: Task.NOTE,
      price: 10,
    },
  ];
}
