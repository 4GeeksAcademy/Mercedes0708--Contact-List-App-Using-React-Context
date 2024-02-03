const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			título:'Agenda-Mercedes0708',
            myArray: [],
            myObject: {},
            favorites: [],
            users:[],
			currentUser: {},

		},
		actions: {
			assignUser: (item) => { setStore({ currentUser: item} )},
			clearUser: () => { setStore({ currentUser: {} })},

			getUsers: async () => {
			   const url = "https://playground.4geeks.com/apis/fake/contact/agenda/Agenda-Mercedes0708"
			   const options = {
				   method: 'GET'
			   }
			   const response = await fetch(url, options)
			   if (!response.ok) {
				   // Tratamos el error.
				   console.log(response.status, response.statusText)
				   return
			   }
			   const data = await response.json() 
			   console.log(data)
			   setStore({users: data})
		   },
		   createUser: async (user) => {
			   const url = "https://playground.4geeks.com/apis/fake/contact"
			   const options = {
				   method: 'POST',
				   headers: { "Content-Type": "application/json" },
				   body: JSON.stringify(user)

			   };

			   const response = await fetch(url, options);
			   if (response.ok) {
				   const data = await response.json();
				   getActions().getUsers();				
			   } else {
				   console.log("ERROR:", response.status, response.statusText);
			   }
		   },
		   deleteContact: async (id) => {
			   const url = "https://playground.4geeks.com/apis/fake/contact/" + id;
			   const options = {
				 method: "DELETE",
			   };
			   const response = await fetch(url, options);
			   if (response.ok) {
				 const data = await response.json();
				 console.log(data);
				 getActions().getUsers();
			   } else {
				 console.log("Error", response.status, response.statusText);
				 getActions().getUsers()
			   }
			 },
			 editContact: async (id, data) => {
			   const url = "https://playground.4geeks.com/apis/fake/contact/" + id;
			   const options = {
				 method: "PUT",
				 headers: { "Content-Type": "application/json" },
				 body: JSON.stringify(data),
			   };
			   const response = await fetch(url, options);
			   if (response.ok) {
				 const data = await response.json();
				 getActions().getUsers();
				 console.log(data);
			   } else {
				 console.log("Error", response.status, response.statusText);
			   }
			 },

		   exampleFunction: () => {
			   getActions().changeColor(0, "green");
		   },

		   loadSomeData: () => {
			   /**
				   fetch().then().then(data => setStore({ "foo": data.bar }))
			   */
		   },
		   changeColor: (index, color) => {
			   //get the store
			   const store = getStore();

			   //we have to loop the entire demo array to look for the respective index
			   //and change its color
			   const demo = store.demo.map((elm, i) => {
				   if (i === index) elm.background = color;
				   return elm;
			   });

			   //reset the global store
			   setStore({ demo: demo });
		   }
	   }
   };
};

export default getState;



























