<template>
    <button type="button" aria-label="Search" class="myButton">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="myIcon" style="" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="var(--icon-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z"></path></svg><span class="hidden text-xs font-medium lg:block">Search</span><span class="flex-none hidden pl-3 ml-auto text-xs font-semibold u-text-gray-400 lg:block">
           </span>
        </button>
</template>

<style scoped>
.myButton {
	background-color:transparent;
	border-radius:6px;
	border:1px solid var(--border-color);
	display:inline-block;
	cursor:pointer;
	color:var(--icon-color);
	font-family:Arial;
	font-size:17px;
	text-decoration:none;
    padding:0px 10px;
}
.myButton:hover {
	background-color:transparent;
}
.myButton:active {
	position:relative;
	top:1px;
}

.myIcon {
    width: 1rem;
    height:1rem;
    margin-right: .5rem;
}
        
</style>