<template>
  <div class="centered-container">
    <div class="container">
      <div class="left-section">
        <h2>Contact List</h2>
        <div class="contact-list">
          <div v-for="(contact, index) in contacts" :key="index" class="contact-item" @click="selectContact(index)">
            {{ contact.name }}
          </div>
        </div>
        <button class="add-button" @click="addContact">Add</button>
      </div>
      <div class="right-section">
        <div>
          <label for="name">Write the name:</label>
          <input type="text" v-model="selectedContactData.name" placeholder="Name">
        </div>
        <div>
          <label for="work">Write the work:</label>
          <input type="text" v-model="selectedContactData.work" placeholder="Work">
        </div>
        <div>
          <label for="mobile">Write the mobile:</label>
          <input type="text" v-model="selectedContactData.mobile" placeholder="Mobile">
        </div>
        <div>
          <label for="email">Write the email:</label>
          <input type="text" v-model="selectedContactData.email" placeholder="Email">
        </div>
        <div>
          <label for="address">Write the address:</label>
          <input type="text" v-model="selectedContactData.address" placeholder="Address">
        </div>
        <button class="delete-button" @click="deleteContact">Delete</button>
        <button class="save-button" @click="saveContact">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        { name: 'Kyara Ávalos', work: 'Developer', mobile: '123-456-7890', email: 'kyara.a@gmail.com', address: 'Heredia' },
        { name: 'Felipe Álvarez', work: 'Developer', mobile: '987-654-3210', email: 'felipe.a@gmail.com', address: 'Guanacaste' },
        { name: 'Sofía García', work: 'Designer', mobile: '123-654-3210', email: 'sofia.g@gmail.com', address: 'Heredia' },
        { name: 'Donald Campos', work: 'Developer', mobile: '654-654-3210', email: 'donald.cg@gmail.com', address: 'Cartago' },
        { name: 'Amalia González', work: 'Designer', mobile: '456-654-3210', email: 'amalia.g@gmail.com', address: 'Alajuela' },
        { name: 'Rafael Cerdas', work: 'Developer', mobile: '489-654-3210', email: 'rafael.cg@gmail.com', address: 'San José' },
      ],
      selectedContact: null,
      selectedContactData: {
        name: '',
        work: '',
        mobile: '',
        email: '',
        address: ''
      },
      dropdownOpen: false
    };
  },
  methods: {
    addContact() {
      this.contacts.push({ ...this.selectedContactData });
      this.selectedContact = this.contacts.length - 1;
    },
    deleteContact() {
      if (this.selectedContact !== null) {
        this.contacts.splice(this.selectedContact, 1);
        this.selectedContact = null;
        this.selectedContactData = {
          name: '',
          work: '',
          mobile: '',
          email: '',
          address: ''
        };
      }
    },
    selectContact(index) {
      this.selectedContact = index;
      this.selectedContactData = { ...this.contacts[this.selectedContact] };
    },
    saveContact() {
      if (this.selectedContact !== null) {
        this.contacts[this.selectedContact] = { ...this.selectedContactData };
      }
    }
  }
};
</script>

<style scoped>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  max-width: 800px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.left-section,
.right-section {
  flex: 1;
  padding: 0 10px;
}

.left-section {
  border-right: 1px solid #ccc;
}

.contact-list {
  overflow-y: auto;
  max-height: 300px;
}

.contact-item {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
}

.contact-item:last-child {
  border-bottom: none;
}

.add-button,
.delete-button,
.save-button {
  margin-top: 10px;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
}

.add-button {
  background-color: #4caf50;
  color: white;
  border: none;
}

.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
}

.save-button {
  background-color: #008CBA;
  color: white;
  border: none;
}

input {
  width: calc(100% - 10px);
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
</style>
