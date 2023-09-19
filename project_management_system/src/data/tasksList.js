import { nanoid } from 'nanoid';

const tasks = [
    {
        "id": nanoid(),
        "title": "First board",
        "tasks": [
            {'title': "Task 1", 'task': ['have a cup of coffee', 'jygnxfgbhdgd', 'aethdsfg']},
            {'title': "Task 2", 'task': ['aehdhdhd', 'take a rest']},
            {'title': "Task 3", 'task': ['56setyhtdzghd аномрпане 4576yht3']}
        ]
    },
    {
        "id": nanoid(),
        "title": "Second board",
        "tasks": [
            {'title': "Task 1", 'task': ['make a dinner']},
            {'title': "Task 2", 'task': ['sighn the contract']}
        ]
    },
    {
        "id": nanoid(),
        "title": "Third board",
        "tasks": [
            {'title': "Task 1", 'task': []}
        ]
    },
]

export default tasks;