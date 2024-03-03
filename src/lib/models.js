import mongoose from "mongoose";

const characterSchema = new mongoose.Schema(
  {
    charName: {
      type: String,
      required: true,
    },

    charImg: {
      type: String,
    },

    nation: {
      type: String,
      required: true,
    },

    resource: {
      resourceType: {
        type: String,
        required: true,
      },

      resourceLvl: {
        type: Number,
        default: 1,
      },
    },

    bannerName: {
      type: String,
    },

    charId: {
      type: String,
      required: true,
      unique: true,
    },

    status: {
      isActive: {
        type: Boolean,
        default: false,
      },

      unplayed: {
        type: Boolean,
        default: true,
      },

      isDead: {
        type: Boolean,
        default: false,
      },
    },
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },

    password: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    userId: {
      type: Number,
      required: true,
      unique: true,
    },

    userImg: {
      type: String,
    },

    characters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Character",
      },
    ],
  },
  { timestamps: true }
);

const bannerSchema = new mongoose.Schema(
  {
    bannername: {
      type: String,
      required: true,
      unique: true,
    },

    members: [
      {
        charId: Number,

        charName: {
          type: String,
          required: true,
        },

        resources: [
          {
            type: String,
            level: Number,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const pidTrackerSchema = new mongoose.Schema({
  latestPID: {
    type: Number,
    required: true,
  },
});

// Export Character Model
export const Character =
  mongoose.models?.Character || mongoose.model("Character", characterSchema);

// Export User Model
export const User = mongoose.models?.User || mongoose.model("User", userSchema);

// Export Banner Model
export const Banner =
  mongoose.models?.Banner || mongoose.model("Banner", bannerSchema);

// Export Post Model
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);

// Export PIDTracker Model
export const PIDTracker =
  mongoose.models?.PIDTracker || mongoose.model("PIDTracker", pidTrackerSchema);
