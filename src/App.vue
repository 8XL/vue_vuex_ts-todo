<template>
  <header>
    <nav>
			<div className="nav-wrapper blue darken-1 padding1">
				<router-link to="/">Vue_ToDo</router-link>
				<ul className="right hide-on-med-and-down">
					<li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
				</ul>
			</div>
  	</nav>
  </header>
  <main>
    <div class='container'>
      <router-view/>
    </div>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

.padding1{
  padding-left: 1rem;
  padding-right: 1rem;
}

.margin-t2{
  margin-top: 2rem;
}

.todo{
  position: relative;
  margin-bottom: 1rem;
  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
}

.todo label{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem;
  color: black;
  background-color: #90caf9;
  border-radius: 3px;
}

.todo.completed span{
  text-decoration: line-through;
}

.todo.completed label{
  background-color: #a0b5c5;
}

.todo.icon{
  z-index: 10;
}
</style>
