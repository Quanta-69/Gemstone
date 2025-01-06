<script setup>
import { statCard, teamCard } from '@/components/Cards';
import Button from '../Buttons/Button.vue';
import statCards from '../../public/data/stats.json'
import teamCards from '../jsonData/teams.json';
</script>

<template>
    <section>
        <div class="container">
            <h1 class="sect-intro">All About Gemstone Sites</h1>

            <div class="sub-sect sub-1">
                <h2 class="sub-sect-title">Our Vision</h2>
                <div class="wrapper">
                    <h1 class="lg-info">Our vision is to be a leading provider of innovative web solutions that empower businesses globally. We aim to create stunning, functional websites that reflect our clients’ goals, offering exceptional value and building lasting relationships.</h1>
                </div>
            </div>

            <div class="sub-sect">
                <h2 class="sub-sect-title">Why Choose Us</h2>
                <div class="cards">
                    <div class="card flex-row" v-for="statCard in statCards" :key="statCard.id">
                        <div v-html="statCard.svg" class="svg"></div>
                        <div class="content">
                        <h2 class="title count text-2xl sm:text-4xl">{{ statCard.count }}</h2>
                        <h3 class="text-content">{{ statCard.title }}</h3>
                        </div>
                    </div>
<!--                <statCard v-for="statCard in statCards" :key="statCard.id" :statCard="statCard" />
 -->             </div>
            </div>

            <div class="sub-sect">
                <h2 class="sub-sect-title">The Brains Behind The Gems</h2>
                <div class="wrapper">
                    <div class="cards">
                        <div class="card max-w-md" v-for="teamCard in teamCards" :key="teamCard.id">
                            <div class="img bg-zinc-900 py-6 rounded-xl w-full h-full flex justify-center items-center">
                                <img class="rounded-full object-cover h-52 w-52 " :src="teamCard.teamImage" alt="Team Image">
                            </div>
                            <div class="text-content flex flex-col justify-center items-center gap-2">
                                <h1 class="name text-4xl font-medium sm:text-5xl" style="color: var(--accent-color);" >{{ teamCard.name }}</h1>
                                <h2 class="role text-xl text-slate-200 font-medium sm:text-2xl" >{{ teamCard.role }}</h2>
                                <h3 class="description text-slate-400 text-center" >{{ teamCard.description }}</h3>
                            </div>
                            <a :href="teamCard.portfolio" target="_blank"><Button class="primary" btnContent="portfolio" /></a>
                        </div>
<!--                     <teamCard v-for="teamCard in teamCards" :key="teamCard.id" :teamCard="teamCard" />
 -->                    </div>
                </div>
            </div>
            
        </div>
    </section>
</template>

<style scoped>
</style>