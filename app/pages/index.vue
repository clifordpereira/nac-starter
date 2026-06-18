<script setup lang="ts">
const { data: users } = await useFetch('/api/_nac/users')
</script>

<template>
  <div>
    <h1>Welcome to Nuxt-Auto-Crud</h1>

    <p>The <code>server/db/schema.ts</code> file is where you can define your database models.</p>
    
    <p>Ensure you have executed <code>nuxt db generate</code> followed by <code>nuxt dev</code> to generate and apply the migrations.</p>
    
    <p>Test the dynamic endpoint by sending a POST request to <code>/api/_nac/users</code>. You can do this using <code>curl</code>, <code>Postman</code>, or any other HTTP client.</p>
    
    <p>Sample Payload:</p>
    <pre>
{
  "name": "Cliford Pereira",
  "email": "cliford@example.com",
  "avatar": "https://avatars.githubusercontent.com/u/12345"
}
    </pre>

    <div>
      <h2>Users List</h2>
      <pre>{{ users }}</pre>
    </div>

    <p>If you are using Nuxt UI, you can use the <code>UTable</code> component to display data in a tabular format.</p>
    <!-- <UTable :rows="users" /> -->
  </div>
</template>