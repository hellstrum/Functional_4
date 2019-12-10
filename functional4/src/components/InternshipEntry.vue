<template>

        <div class="internship">
            <div class="internship-entry">
                <!-- ADD a conditional to the isPopular div...if it has more than 5 views, show the class -->
                <div class="isPopular" v-if="internship.views>5">Trending</div>
                <span class="internship-views">{{ internship.views }} views</span>
                <h2>Name of Internship <span class="internship-identifer">ID# {{internship.id}} </span> </h2>

                <p class="internship-location">{{ internship.location }}</p>

                <div class="button-controls">
                    <button class="btnFavorite" @click="setFavorite(internship)">
                        <span  v-if="internship.isFavorite === false">Add As Favorite</span>
                        <span class="test" v-if="internship.isFavorite === true">Remove From Favorites</span>
                    </button>

                    <button class="btnMoreInfo" @click="showInfo(internship)">More Info</button>
                </div>

                <div class="internship-comments">
                    <div>
                        <h3 class="internship-comments-title">View Comments</h3>

                        <ul class="internship-comment-list"
                            v-for="(comment, index) in internship.comments"
                            v-bind:key="index"
                            :comment="comment">

                            <li class="internship-comment-list-item">
                                <span class="comment-first-name">{{ comment.firstName}}</span>
                                <span class="comment-last-name">{{ comment.lastName }}</span>
                                <span class="comment-entry"> {{ comment.comment }}</span>
                            </li>
                        </ul>
                    </div>

                    <h3 class="internship-comments-title">Leave a Comment</h3>


                     <label for="lblComment">Your Comment</label>
                    <input type="text" class="inpComment" id="lblComment" placeholder="New Comment" v-model="inputEntry" required>

                    <p style="color: red; font-size: 13px" v-if="error">
                      You must type something first!
                    </p>

                    <button class="btnAddComment" @click="submitComment(internship.id)">Add Your Comment</button>
                </div>



            </div>
        </div>
</template>


<script>
export default {
    name:"InternshipEntry",
    props:['internship'],
    data() {
        return {

            inputEntry:'',
            error: false
        }
    },
    methods: {

        setFavorite(internship){
          this.$store.dispatch("setFavorite", internship);
            // go to the store and dispatch an action called setFavorite
        },
        showInfo(internship)
        {
          this.$store.dispatch("showInfo", internship);
            // go to the store and dispatch an action called showInfo
        },
        submitComment(internshipId)
        {
          if (this.inputEntry === '') return this.error = true;
          
          let objComment = {
            currentInternship:internshipId,

            comment: this.inputEntry}

            this.$store.dispatch('submitComment', objComment);

            this.inputEntry='';



        }
    }
}
</script>

<style lang="scss" scoped>
    .internship {
        box-sizing: border-box;
        background:#f8f8f8;

        @media screen and (max-width:414px)
        {
            width:100%;
            display: flex;
            flex-direction: column;
        }

        @media screen and (min-width:415px) and (max-width:768px)
        {
            width:90%;
            margin:auto;
            display:flex;
            flex-direction:row;
            justify-content: space-around;
        }

        &-entry {
            @media screen and (min-width:415px) and (max-width:768px)
            {
                flex:0 1 80%;
                margin-bottom:2em;
            }
        }

        &-views {
            font-weight: bold;
        }

        h2 {
            letter-spacing:0.02rem;
        }

        .button-controls {
            display:flex;
            justify-content: space-between;
        }

        .internship-comment-list {
            list-style:none;
            margin:0;
            padding:0;

            &-item {
                margin-bottom:0.4em;
                font-size:1.1rem;
                background:lighten(#f90, 10%);
                padding:0.5em;
            }
        }

        .inpFirst, .inpLast, .inpComment {
            padding:0.3em;
            width:100%;
            font-size:1.3rem;
            margin-bottom:0.4rem;
        }

        .isPopular {
            border:2px solid rgb(0,100,177);
            background:lighten(rgb(0,100,177), 50%);
            padding:1em;
        }

        .test{
          background-color: orange;
        }
    }
</style>
