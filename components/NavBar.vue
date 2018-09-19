<template>
    <div>
        <b-navbar toggleable="md" type="light">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand to="/">
            <img src="https://pbs.twimg.com/profile_images/442295892305932289/u6pIlt0z.png" class="d-inline-block align-top" alt="BV" style="height: 30px; width: 30px; border-radius: 100%;">
            Luleå Makerspace Projekt
        </b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item href="http://www.luleamakerspace.se">Blogg</b-nav-item>
            </b-navbar-nav>

                <!-- Right aligned nav items 
                <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
                </b-navbar-nav>-->
        </b-collapse>
        </b-navbar>
    </div>
</template>

<style>
    .navbar {
        background: white;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.13);
    }
</style>