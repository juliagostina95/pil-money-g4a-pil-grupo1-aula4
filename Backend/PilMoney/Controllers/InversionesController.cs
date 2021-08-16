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
    public class InversionesController : Controller
    {
        private PilMoneyEntities db = new PilMoneyEntities();

        // GET: Inversiones
        public ActionResult Index()
        {
            var inversiones = db.Inversiones.Include(i => i.Cuentas);
            return View(inversiones.ToList());
        }

        // GET: Inversiones/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Inversiones inversiones = db.Inversiones.Find(id);
            if (inversiones == null)
            {
                return HttpNotFound();
            }
            return View(inversiones);
        }

        // GET: Inversiones/Create
        public ActionResult Create()
        {
            ViewBag.CVU = new SelectList(db.Cuentas, "CVU", "Alias");
            return View();
        }

        // POST: Inversiones/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "idInversion,tipoInversion,Importe,Fecha,Renovacion,CVU")] Inversiones inversiones)
        {
            if (ModelState.IsValid)
            {
                db.Inversiones.Add(inversiones);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CVU = new SelectList(db.Cuentas, "CVU", "Alias", inversiones.CVU);
            return View(inversiones);
        }

        // GET: Inversiones/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Inversiones inversiones = db.Inversiones.Find(id);
            if (inversiones == null)
            {
                return HttpNotFound();
            }
            ViewBag.CVU = new SelectList(db.Cuentas, "CVU", "Alias", inversiones.CVU);
            return View(inversiones);
        }

        // POST: Inversiones/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "idInversion,tipoInversion,Importe,Fecha,Renovacion,CVU")] Inversiones inversiones)
        {
            if (ModelState.IsValid)
            {
                db.Entry(inversiones).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CVU = new SelectList(db.Cuentas, "CVU", "Alias", inversiones.CVU);
            return View(inversiones);
        }

        // GET: Inversiones/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Inversiones inversiones = db.Inversiones.Find(id);
            if (inversiones == null)
            {
                return HttpNotFound();
            }
            return View(inversiones);
        }

        // POST: Inversiones/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Inversiones inversiones = db.Inversiones.Find(id);
            db.Inversiones.Remove(inversiones);
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
