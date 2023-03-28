/*-------------------Recomended Use-----------------------
 1. This helpers are indexed on this same folder in index.js

 2. Import like this:
        import * as SubaHelpers from "<relative_path>/supabase_helpers"

 3. This helpers are exported as 'get' so if you want tu call a function it needs tu have the next format
        SupaHelpers.get.<function_to_call>
    Examples:
        - SupaHelpers.get.userId() //this will get user Id
        - SupaHelpers.get.loggedStatus //this will check if there is an active user session
        - SupaHelpers.get.userDecks //this will get current user's decks

*/

import { supabase } from "../supabaseClient";

/**
 * Retrieves info from Supabase data base.
 * Returns an object holding the current user;
 * Returns undefined if no user was found;
 *
 * @return {Object} The current user; as an object.
 */
export async function userData() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    console.log(`Unable to retrieve user, there might be no user logged in.`);
    return undefined;
  }
}

/**
 * Retrieves info from Supabase data base.
 * Returns a string holding current user's UUID;
 * Returns undefined if no user was found;
 *
 * @return {string} UUID as string.
 */
export async function userId() {
  try {
    const {
      data: {
        user: { id },
      },
    } = await supabase.auth.getUser();
    return id;
  } catch (error) {
    console.log(`Unable to retrieve ID, there might be no user logged in.`);
    return undefined;
  }
}

/**
 * Retrieves info from Supabase data base.
 * Returns a string holding current user's email;
 * Returns undefined if no user was found;
 *
 * @return {string} Email as string.
 */
export async function userEmail() {
  try {
    const {
      data: {
        user: { email },
      },
    } = await supabase.auth.getUser();
    return email;
  } catch (error) {
    console.log(`Unable to retrieve email, there might be no user logged in.`);
    return undefined;
  }
}

/**
 * Retrieves info from Supabase data base.
 * Returns a string holding current user's full name;
 * Returns undefined if no user was found;
 *
 * @return {string} Name as string.
 */
export async function userNameFull() {
  try {
    const uuid = await userId();
    const { data, error } = await supabase
      .from("users_details")
      .select()
      .eq("users_uuid", uuid);
    if (error) throw error;
    const { name, lastname } = data.at(0);
    return name + " " + lastname;
  } catch (error) {
    console.log(`Unable to retrieve name, there might be no user logged in.`);
    return undefined;
  }
}

/**
 * Retrieves info from Supabase data base.
 * Returns a string holding current user's subscription;
 * Returns undefined if no user was found;
 *
 * @return {string} Subscription as string.
 */
export async function userSubscription() {
  try {
    const uuid = await userId();

    const users_details = await supabase
      .from("users_details")
      .select()
      .eq("users_uuid", uuid);

    if (users_details.error) throw users_details.error;

    const { subscription_id } = users_details.data.at(0);

    const subscription = await supabase
      .from("subscription")
      .select("id,name")
      .eq("id", subscription_id);

    if (subscription.error) throw subscription.error;

    return subscription.data.at(0);
  } catch (error) {
    console.log(
      `Unable to retrieve subscription, there might be no user logged in.`
    );
    return undefined;
  }
}

/**
 * Retrieves info from Supabase data base.
 * Returns true if a user is logged in;
 * Returns false if a user is not logged in or has logged out.
 *
 * @return {boolean} boolean true or false.
 */
export async function loggedStatus() {
  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    if (error) throw error;
    return !!session;
  } catch (error) {
    console.log(error);
    return error;
  }
}

/**
 * Retrieves info from Supabase data base.
 * Returns an array of decks of the current logged user.
 *
 * @return {Object[]} Array of decks <Object>
 */
export async function userDecks() {
  try {
    const id = await userId();
    const { data: decks, error } = await supabase
      .from("decks")
      .select()
      .eq("user_id", id);
    if (error) throw error;
    return decks;
  } catch (error) {
    console.log(error);
    return [];
  }
}

/**
 * Retrieves info from Supabase data base.
 * Return an array with current user's decks sorted by creation date.
 *
 * @param {boolean} ascending If 'true', decks will be in ascending order
 * @returns {Object[]} An array of decks
 */
export async function userDecksByCreateDate(ascending = true) {
  try {
    const id = await userId();
    const { data: decks, error } = await supabase
      .from("decks")
      .select()
      .eq("user_id", id)
      .order("created_at", { ascending });
    if (error) throw error;
    return decks;
  } catch (error) {
    console.log(error);
    return [];
  }
}

/**
 * Retrieves info from Supabase data base.
 * Return an array with current user's decks sorted by name.
 *
 * @param {boolean} ascending If 'true', decks will be in ascending order
 * @returns {Object[]} An array of decks
 */
export async function userDecksByName(ascending = true) {
  try {
    const id = await userId();
    const { data: decks, error } = await supabase
      .from("decks")
      .select()
      .eq("user_id", id)
      .order("name", { ascending });
    if (error) throw error;
    return decks;
  } catch (error) {
    console.log(error);
    return [];
  }
}

/**
 * Retrieves info from Supabase data base.
 * Return an array with current user's decks sorted by category; can also by ordered by a property
 *
 *
 * @param {Object} Object Category and filter options.
 * @param {number} Object.categoryId The category id to filter by.
 * @param {string} [Object.orderBy="name"] The parameter to order by; defaults to "name".
 * @param {boolean} [Object.ascending=true] If 'true' sorts by ascending order; defaults to 'true'.
 * @returns {Object[]} An array of decks
 */
export async function userDecksByCategoryOrdered({
  categoryId,
  orderBy = "name",
  ascending = true,
} = {}) {
  try {
    const id = await userId();
    const { data: decks, error } = await supabase
      .from("decks")
      .select()
      .eq("user_id", id)
      .eq("category_id", categoryId)
      .order(orderBy, { ascending });
    if (error) throw error;
    return decks;
  } catch (error) {
    console.log(error);
    return [];
  }
}

/**
 * Retrieves info from Supabase data base.
 * Return an array with current user's decks sorted by sub-category; can also by ordered by a property
 *
 *
 * @param {Object} Object Category and filter options.
 * @param {number} Object.subCategoryId The sub-category id to filter by.
 * @param {string} [Object.orderBy="name"] The parameter to order by; defaults to "name".
 * @param {boolean} [Object.ascending=true] If 'true' sorts by ascending order; defaults to 'true'.
 * @returns {Object[]} An array of decks
 */
export async function userDecksBySubCategoryOrdered({
  subCategoryId,
  orderBy = "name",
  ascending = true,
} = {}) {
  try {
    const id = await userId();
    const { data: decks, error } = await supabase
      .from("decks")
      .select()
      .eq("user_id", id)
      .eq("subcategory_id", subCategoryId)
      .order(orderBy, { ascending });
    if (error) throw error;
    return decks;
  } catch (error) {
    console.log(error);
    return [];
  }
}

/**
 * Retrieves info from Supabase data base.
 * Returns an array of card object belonging to a deck with the specific ID.
 *
 * @param {string} deckId The ID of the deck to get cards from.
 * @return {Object[]} Array of cards <Object>
 */
export async function cardsByDeckId(deckId) {
  try {
    const { data: cards, error } = await supabase
      .from("cards")
      .select()
      .eq("deck_id", deckId)
      .order("created_at", { ascending: true });
    if (error) throw error;
    return cards;
  } catch (error) {
    console.log(error);
    return [];
  }
}

/**
 * Retrieves info from Supabase data base.
 * Returns an array with all decks in database
 *
 * @returns {Object[]} Array with all decks in database.
 */
export async function allDecks() {
  try {
    const { data: decks, error } = await supabase.from("decks").select();
    if (error) throw error;
    return decks;
  } catch (error) {
    console.log(error);
    return [];
  }
}

/**
 * Retrieves info from Supabase data base.
 * Return an array with all database decks sorted by creation date.
 *
 * @param {boolean} ascending If 'true', decks will be in ascending order
 * @returns {Object[]} An array of decks
 */
export async function decksByCreateDate(ascending = true) {
  try {
    const { data: decks, error } = await supabase
      .from("decks")
      .select()
      .order("created_at", { ascending });
    if (error) throw error;
    return decks;
  } catch (error) {
    console.log(error);
    return [];
  }
}

/**
 * Retrieves info from Supabase data base.
 * Return an array with all decks sorted by name.
 *
 * @param {boolean} ascending If 'true', decks will be in ascending order
 * @returns {Object[]} An array of decks
 */
export async function allDecksByName(ascending = true) {
  try {
    const id = await userId();
    const { data: decks, error } = await supabase
      .from("decks")
      .select()
      .order("name", { ascending });
    if (error) throw error;
    return decks;
  } catch (error) {
    console.log(error);
    return [];
  }
}

/**
 * Retrieves info from Supabase data base.
 * Return an array with current all sorted by category; can also by ordered by a property
 *
 *
 * @param {Object} Object Category and filter options.
 * @param {number} Object.categoryId The category id to filter by.
 * @param {string} [Object.orderBy="name"] The parameter to order by; defaults to "name".
 * @param {boolean} [Object.ascending=true] If 'true' sorts by ascending order; defaults to 'true'.
 * @returns {Object[]} An array of decks
 */
export async function allDecksByCategoryOrdered({
  categoryId,
  orderBy = "name",
  ascending = true,
} = {}) {
  try {
    const { data: decks, error } = await supabase
      .from("decks")
      .select()
      .eq("category_id", categoryId)
      .order(orderBy, { ascending });
    if (error) throw error;
    return decks;
  } catch (error) {
    console.log(error);
    return [];
  }
}

/**
 * Retrieves info from Supabase data base.
 * Return an array with all decks sorted by sub-category; can also by ordered by a property
 *
 *
 * @param {Object} Object Category and filter options.
 * @param {number} Object.subCategoryId The sub-category id to filter by.
 * @param {string} [Object.orderBy="name"] The parameter to order by; defaults to "name".
 * @param {boolean} [Object.ascending=true] If 'true' sorts by ascending order; defaults to 'true'.
 * @returns {Object[]} An array of decks
 */
export async function allDecksBySubCategoryOrdered({
  subCategoryId,
  orderBy = "name",
  ascending = true,
} = {}) {
  try {
    const { data: decks, error } = await supabase
      .from("decks")
      .select()
      .eq("subcategory_id", subCategoryId)
      .order(orderBy, { ascending });
    if (error) throw error;
    return decks;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function countCardsInDeck(deck_id) {
  try {
    const { data, error } = await supabase
      .from("cards")
      .select()
      .eq("deck_id", deck_id);

    if (error) throw error;

    const count = data.length;
    return count;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
