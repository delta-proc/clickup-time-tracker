<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      This will be a clickup time tracker
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
