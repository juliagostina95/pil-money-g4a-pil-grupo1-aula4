using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PilMoney.Models;

namespace PilMoney.Controllers
{
    public class TipoMonedasController : Controller
    {
        private PilMoneyEntities db = new PilMoneyEntities();

        // GET: TipoMonedas
        public ActionResult Index()
        {
            return View(db.TipoMonedas.ToList());
        }

        // GET: TipoMonedas/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TipoMonedas tipoMonedas = db.TipoMonedas.Find(id);
            if (tipoMonedas == null)
            {
                return HttpNotFound();
            }
            return View(tipoMonedas);
        }

        // GET: TipoMonedas/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: TipoMonedas/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "idTipoMoneda,nombre")] TipoMonedas tipoMonedas)
        {
            if (ModelState.IsValid)
            {
                db.TipoMonedas.Add(tipoMonedas);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(tipoMonedas);
        }

        // GET: TipoMonedas/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TipoMonedas tipoMonedas = db.TipoMonedas.Find(id);
            if (tipoMonedas == null)
            {
                return HttpNotFound();
            }
            return View(tipoMonedas);
        }

        // POST: TipoMonedas/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "idTipoMoneda,nombre")] TipoMonedas tipoMonedas)
        {
            if (ModelState.IsValid)
            {
                db.Entry(tipoMonedas).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(tipoMonedas);
        }

        // GET: TipoMonedas/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TipoMonedas tipoMonedas = db.TipoMonedas.Find(id);
            if (tipoMonedas == null)
            {
                return HttpNotFound();
            }
            return View(tipoMonedas);
        }

        // POST: TipoMonedas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            TipoMonedas tipoMonedas = db.TipoMonedas.Find(id);
            db.TipoMonedas.Remove(tipoMonedas);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
