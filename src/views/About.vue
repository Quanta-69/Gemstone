<script setup>
import { statCard, teamCard, missionCard } from '@/components/Cards';
import statCards from '@/jsonData/stats.json';
import teamCards from '@/jsonData/teams.json';
import missionCards from '@/jsonData/missionCards.json'
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
                    <statCard v-for="statCard in statCards" :key="statCard.id" :statCard="statCard" />
                </div>
            </div>

            <div class="sub-sect">
                <h2 class="sub-sect-title">The Brains Behind The Gems</h2>
                <div class="wrapper">
                    <div class="cards">
                        <teamCard v-for="teamCard in teamCards" :key="teamCard.id" :teamCard="teamCard" />
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</template>

<style scoped>
</style>