$(document).ready(function(){

    $("#calendar").simpleCalendar({
        //Defaults options below
        months: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'], //string of months starting from january
        days: ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'], //string of days starting from sunday
        minDate : "2018-01-01", // minimum date
        maxDate : "2030-01-01", // maximum date
        insertEvent: true, // can insert events
        displayEvent: true, // display existing event
        fixedStartDay: true, // Week begin always by monday
        event: [], //List of event
        insertCallback : function(){
            alert('fecha agregada');
        } // Callback when an event is added to the calendar
    });

});