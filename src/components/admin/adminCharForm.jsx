"use client";

import { useFormState } from "react-dom";
import { addCharacter } from "@/lib/actions";

import Card from "@/components/containers/card/card";

import styles from "./adminComponent.module.scss";

const AdminCharForm = ({ userId }) => {
  const [state, formAction] = useFormState(addCharacter, undefined);

  return (
    <Card>
      <div className={styles.card__container}>
        <div className={styles.card__header}>
          <h1 className={styles.card__header__title}>
            Add new character for this user
          </h1>
        </div>

        <form action={formAction} className={styles.form__container}>
          <input
            type="text"
            name="charName"
            placeholder="Character Name"
            required
          />

          <input type="text" name="charImg" placeholder="Character Image URL" />

          <select name="nation">
            <option value="">Select Nation</option>
            <option value="brassCoast">The Brass Coast</option>
            <option value="dawn">Dawn</option>
            <option value="highguard">Highguard</option>
            <option value="orcs">Imperial Orcs</option>
            <option value="league">The League</option>
            <option value="marches">The Marches</option>
            <option value="navarr">Navarr</option>
            <option value="urizen">Urizen</option>
            <option value="varushka">Varushka</option>
            <option value="wintermark">Wintermark</option>
          </select>

          <div className={styles.form__resource}>
            <select name="resourceType" required>
              <option value="">Select Resource</option>
              <option value="business">Business</option>
              <option value="congregation">Congregation</option>
              <option value="farm">Farm</option>
              <option value="fleet">Fleet</option>
              <option value="herbGarden">Herb Garden</option>
              <option value="manaSite">Mana Site</option>
              <option value="militaryUnit">Military Unit</option>
              <option value="forest">Forest</option>
              <option value="mine">Mine</option>
            </select>

            <input
              type="number"
              name="resourceLvl"
              placeholder="lvl"
              min="1"
              max="10"
              required
            />
          </div>

          <input type="text" name="bannerName" placeholder="Banner Name" />

          <button className={styles.submitButton} type="submit">
            Add Character
          </button>

          {state?.error && <p>{state.error}</p>}
        </form>
      </div>
    </Card>
  );
};

export default AdminCharForm;
