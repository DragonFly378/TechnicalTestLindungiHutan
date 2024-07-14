// index.js
// file: tasks.sjs
Page({
    data: {
      tasks: [
        { title: 'Tugas 1', completed: false },
        { title: 'Tugas 2', completed: false }
      ],
      newTask: ''
    },
    handleInput(e) {
      console.log('handleInput called with:', e.detail.value); // Debug log
      this.setData({
        newTask: e.detail.value
      });
    //   console.log(newTask)
    },
    addTask() {
      console.log('addTask called'); // Debug log
      const { tasks, newTask } = this.data;
      if (newTask.trim() === '') {
        console.log('New task is empty'); // Debug log
        return;
      }
      tasks.push({ title: newTask, completed: false });
      console.log('New task added:', tasks); // Debug log
      this.setData({
        tasks,
        newTask: ''
      });
    },
    toggleTaskCompletion(e) {
      const index = e.currentTarget.dataset.index;
      const tasks = this.data.tasks;
      tasks[index].completed = !tasks[index].completed;
      this.setData({ tasks });
    },
    deleteTask(e) {
      const index = e.currentTarget.dataset.index;
      const tasks = this.data.tasks;
      tasks.splice(index, 1);
      this.setData({ tasks });
    }
  });
  