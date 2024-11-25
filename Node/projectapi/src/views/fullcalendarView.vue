<template>
  <FullCalendar :options="calendarOptions" />
  <button @click="toggleWeekends">toggle weekends</button>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          { title: 'event 1', date: '2024-12-07' },
          { title: 'event 2', date: '2024-12-08' }
        ],
        weekends: false // initial value
      }
    }
  },
  methods: {
    handleDateClick: function(arg) {
      alert('date click! ' + arg.dateStr)
      this.calendarOptions.events.push({ title: 'event 3', date: arg.dateStr })
    },
    
    toggleWeekends: function() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
    }
  }
}
</script>
