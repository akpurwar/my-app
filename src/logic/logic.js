export const diff= (date) => {
    const now = Date.now();
    const past = new Date(date).getTime();
  
    let diff = now - past;
    let adds = "";
  
    diff /= 60 * 1000;
    if (diff < 60) {
      diff = Math.round(diff);
      adds = diff > 1 ? "s" : "";
      return `${diff} minute${adds}`;
    }
  
    diff /= 60;
    if (diff < 24) {
      diff = Math.round(diff);
      adds = diff > 1 ? "s" : "";
      return `${diff} hour${adds}`;
    }
  
    diff /= 24;
    diff = Math.round(diff);
    adds = diff > 1 ? "s" : "";
    return `${diff} day${adds}`;
  };
